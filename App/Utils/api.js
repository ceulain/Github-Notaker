const GITHUB_API = `https://api.github.com/users/`;

export const API = {
  getBio (username) {
    username = username.toLowerCase().trim();
    var url = `${GITHUB_API}${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos (username) {
    username = username.toLowerCase().trim();
    var url = `${GITHUB_API}${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNotes (username) {
    username = username.toLowerCase().trim();
    let url = `https://github-saver-b762a.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  addNote (username, note) {
    username = username.toLowerCase().trim();
    let url = `https://github-saver-b762a.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};
