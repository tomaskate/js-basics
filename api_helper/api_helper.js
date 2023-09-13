import fetch from "node-fetch";

export async function getPosts(baseUrl) {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }
    const results = await response.json();
    return results;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function createPost(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
