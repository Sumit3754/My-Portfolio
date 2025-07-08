import React from 'react';

interface GitHubStatsProps {
  username: string;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">GitHub Stats</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-2xl font-bold text-gray-900">100+</div>
          <div className="text-gray-600">Repos</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">2000+</div>
          <div className="text-gray-600">Contributions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">500+</div>
          <div className="text-gray-600">Followers</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">1000+</div>
          <div className="text-gray-600">Stars</div>
        </div>
      </div>
      <div className="mt-6">
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
