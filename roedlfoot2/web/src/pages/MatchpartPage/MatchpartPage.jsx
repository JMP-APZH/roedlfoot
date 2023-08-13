import { Link, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";

import React, { useState, useEffect } from 'react';

import { GraphQLClient, gql } from 'graphql-request';


const MatchpartPage = () => {

  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matchType, setMatchType] = useState('1vs1'); // Default to 1vs1
  const [userScores, setUserScores] = useState({ user1: 0, user2: 0 });

  const graphQLClient = new GraphQLClient('/graphql'); // Replace with your GraphQL endpoint

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get('/api/matches'); // Replace with your API endpoint
        setMatches(response.data.matches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    }
    fetchMatches();
  }, []);

  const participateInMatch = async () => {
    try {
      const response = await axios.post(
        `/api/matches/${selectedMatch}/participate`,
        { matchType }, // Include matchType in the request body
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Replace with your JWT
          },
        }
      );
      if (response.status === 200) {
        // Match participation successful
      }
    } catch (error) {
      console.error('Error participating in match:', error);
    }
  };

  // const submitScores = async () => {
  //   try {
  //     const mutation = gql`
  //       mutation SubmitScores($matchId: Int!, $userScores: UserScoresInput!) {
  //         submitScores(matchId: $matchId, userScores: $userScores) {
  //           success
  //           message
  //         }
  //       }
  //     `;

  //     const variables = {
  //       matchId: selectedMatch,
  //       userScores,
  //     };

  //     const response = await graphQLClient.request(mutation, variables);
  //     if (response.submitScores.success) {
  //       // Scores submitted successfully
  //     } else {
  //       // Handle error case
  //     }
  //   } catch (error) {
  //     console.error('Error submitting scores:', error);
  //   }
  // }

  return (
    <>
      <MetaTags title="Matchpart" description="Matchpart page" />

      <h1>MatchpartPage</h1>
      <p>
        Find me in <code>./web/src/pages/MatchpartPage/MatchpartPage.jsx</code>
      </p>
      <p>
        My default route is named <code>matchpart</code>, link to me with `
        <Link to={routes.matchpart()}>Matchpart</Link>`
      </p>

      <div className="bg-blue-400 p-8">
      <h2>Match Participation</h2>
      <select onChange={(e) => setSelectedMatch(e.target.value)}>
        <option value="">Select a match</option>
        {matches.map((match) => (
          <option key={match.id} value={match.id}>
            {match.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => setMatchType(e.target.value)}>
        <option value="1vs1">1vs1</option>
        <option value="2vs2">2vs2</option>
      </select>
      <button onClick={participateInMatch}>Participate</button>

      {selectedMatch && (
        <div>
          <h2>Enter Scores</h2>
          <input
            type="number"
            value={userScores.user1}
            onChange={(e) => setUserScores({ ...userScores, user1: parseInt(e.target.value) })}
          />
          {matchType === '2vs2' && (
            <input
              type="number"
              value={userScores.user2}
              onChange={(e) => setUserScores({ ...userScores, user2: parseInt(e.target.value) })}
            />
          )}
          {/* <button onClick={submitScores}>Submit Scores</button> */}
        </div>
      )}
    </div>
    </>
  );
};

export default MatchpartPage;
