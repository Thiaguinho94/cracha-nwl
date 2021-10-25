const linksSocialMedia = {
  github: 'Thiaguinho94',
  youtube: 'UCVW_YCmbt5ALP4I7dVHYl1g',
  facebook: 'thiago.azevedo.aguiar',
  instagram: 'Thiaguinho94',
  twitter: 'Thiaaguinho94'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
