import fetch from "node-fetch";

export async function getPosts(baseUrl) {
  const response = await fetch(baseUrl);
  const results = await response.json();
  return results;
}

export async function createPost(url, body) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
}
