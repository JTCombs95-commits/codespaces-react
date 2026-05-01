import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
yield{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::[YOUR AWS ACCOUNT ID]:oidc-provider/oidc.vercel.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.vercel.com:aud": [
            "https://vercel.com/[OLD_TEAM_SLUG]",
            "https://vercel.com/[NEW_TEAM_SLUG]"
          ],
          "oidc.vercel.com:sub": [
            "owner:[OLD_TEAM_SLUG]:project:[OLD_PROJECT_NAME]:environment:production",
            "owner:[NEW_TEAM_SLUG]:project:[NEW_PROJECT_NAME]:environment:production"
          ]
        }
      }
    }
  ]
j}{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "OldTeamName",
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::[YOUR AWS ACCOUNT ID]:oidc-provider/oidc.vercel.com/[OLD_TEAM_SLUG]"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.vercel.com/[OLD_TEAM_SLUG]:aud": [
            "https://vercel.com/[OLD_TEAM_SLUG]"
          ],
          "oidc.vercel.com/[OLD_TEAM_SLUG]:sub": [
            "owner:[OLD_TEAM_SLUG]:project:[OLD_PROJECT_NAME]:environment:production"
          ]
        }
      }
    },
    {
      "Sid": "NewTeamName",
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::[YOUR AWS ACCOUNT ID]:oidc-provider/oidc.vercel.com/[NEW_TEAM_SLUG]"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "oidc.vercel.com/[NEW_TEAM_SLUG]:aud": [
            "https://vercel.com/[NEW_TEAM_SLUG]"
          ],
          "oidc.vercel.com/[NEW_TEAM_SLUG]:sub": [
            "owner:[NEW_TEAM_SLUG]:project:[NEW_PROJECT_NAME]:environment:production"
          ]
        }
      }
    }
  ]
}
