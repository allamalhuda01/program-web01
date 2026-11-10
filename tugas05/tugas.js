
const form = document.getElementById("searchForm");
const input = document.getElementById("username");
const message = document.getElementById("message");
const profile = document.getElementById("profile");
const button = form.querySelector("button");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = input.value.trim();

    profile.classList.add("hidden");
    message.textContent = "Loading...";
    button.disabled = true;

    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        if (response.status === 404) {
            throw new Error("User tidak ditemukan (404).");
        }

        if (!response.ok) {
            throw new Error("Gagal mengambil data GitHub.");
        }

        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").textContent =
            data.name || data.login;
        document.getElementById("bio").textContent =
            data.bio || "Bio tidak tersedia.";
        document.getElementById("repos").textContent =
            data.public_repos;
        document.getElementById("profileLink").href =
            data.html_url;

        message.textContent = "";
        profile.classList.remove("hidden");

    } catch (error) {
        message.textContent = error.message;

    } finally {
        button.disabled = false;
    }
});
