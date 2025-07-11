function chunkArray(array, size = 12) {
  const result = [];
  let group = [];

  array.forEach((item, index) => {
    const newItem = { ...item, order: index + 1 };

    group.push(newItem);

    if (group.length === size) {
      result.push(group);
      group = [];
    }
  });

  // 如果最后一组不足 size，也加入结果
  if (group.length) {
    result.push(group);
  }
  return result;
}

const initPages = [
  {
    key: "aslmdiohnionda1123123ad",
    data: [
      {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description: "The library for web and native user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2025-07-11T09:36:35Z",
        pushed_at: "2025-07-11T05:27:54Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://react.dev",
        size: 1047391,
        stargazers_count: 237163,
        watchers_count: 237163,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: true,
        forks_count: 48898,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1007,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 48898,
        open_issues: 1007,
        watchers: 237163,
        default_branch: "main",
        score: 1,
        order: 1,
      },
      {
        id: 126577260,
        node_id: "MDEwOlJlcG9zaXRvcnkxMjY1NzcyNjA=",
        name: "javascript-algorithms",
        full_name: "trekhleb/javascript-algorithms",
        private: false,
        owner: {
          login: "trekhleb",
          id: 3000285,
          node_id: "MDQ6VXNlcjMwMDAyODU=",
          avatar_url: "https://avatars.githubusercontent.com/u/3000285?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/trekhleb",
          html_url: "https://github.com/trekhleb",
          followers_url: "https://api.github.com/users/trekhleb/followers",
          following_url:
            "https://api.github.com/users/trekhleb/following{/other_user}",
          gists_url: "https://api.github.com/users/trekhleb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/trekhleb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/trekhleb/subscriptions",
          organizations_url: "https://api.github.com/users/trekhleb/orgs",
          repos_url: "https://api.github.com/users/trekhleb/repos",
          events_url: "https://api.github.com/users/trekhleb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/trekhleb/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/trekhleb/javascript-algorithms",
        description:
          "📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",
        fork: false,
        url: "https://api.github.com/repos/trekhleb/javascript-algorithms",
        forks_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/forks",
        keys_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/teams",
        hooks_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/hooks",
        issue_events_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/events",
        assignees_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/tags",
        blobs_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/languages",
        stargazers_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/stargazers",
        contributors_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/contributors",
        subscribers_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/subscribers",
        subscription_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/subscription",
        commits_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/merges",
        archive_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/downloads",
        issues_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/labels{/name}",
        releases_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/trekhleb/javascript-algorithms/deployments",
        created_at: "2018-03-24T07:47:04Z",
        updated_at: "2025-07-11T09:27:18Z",
        pushed_at: "2025-02-12T16:19:59Z",
        git_url: "git://github.com/trekhleb/javascript-algorithms.git",
        ssh_url: "git@github.com:trekhleb/javascript-algorithms.git",
        clone_url: "https://github.com/trekhleb/javascript-algorithms.git",
        svn_url: "https://github.com/trekhleb/javascript-algorithms",
        homepage: "",
        size: 13564,
        stargazers_count: 192099,
        watchers_count: 192099,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 30747,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 364,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "algorithm",
          "algorithms",
          "computer-science",
          "data-structures",
          "interview",
          "interview-preparation",
          "javascript",
          "javascript-algorithms",
        ],
        visibility: "public",
        forks: 30747,
        open_issues: 364,
        watchers: 192099,
        default_branch: "master",
        score: 1,
        order: 2,
      },
      {
        id: 6498492,
        node_id: "MDEwOlJlcG9zaXRvcnk2NDk4NDky",
        name: "javascript",
        full_name: "airbnb/javascript",
        private: false,
        owner: {
          login: "airbnb",
          id: 698437,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==",
          avatar_url: "https://avatars.githubusercontent.com/u/698437?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/airbnb",
          html_url: "https://github.com/airbnb",
          followers_url: "https://api.github.com/users/airbnb/followers",
          following_url:
            "https://api.github.com/users/airbnb/following{/other_user}",
          gists_url: "https://api.github.com/users/airbnb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/airbnb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/airbnb/subscriptions",
          organizations_url: "https://api.github.com/users/airbnb/orgs",
          repos_url: "https://api.github.com/users/airbnb/repos",
          events_url: "https://api.github.com/users/airbnb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/airbnb/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/airbnb/javascript",
        description: "JavaScript Style Guide",
        fork: false,
        url: "https://api.github.com/repos/airbnb/javascript",
        forks_url: "https://api.github.com/repos/airbnb/javascript/forks",
        keys_url:
          "https://api.github.com/repos/airbnb/javascript/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/airbnb/javascript/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/airbnb/javascript/teams",
        hooks_url: "https://api.github.com/repos/airbnb/javascript/hooks",
        issue_events_url:
          "https://api.github.com/repos/airbnb/javascript/issues/events{/number}",
        events_url: "https://api.github.com/repos/airbnb/javascript/events",
        assignees_url:
          "https://api.github.com/repos/airbnb/javascript/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/airbnb/javascript/branches{/branch}",
        tags_url: "https://api.github.com/repos/airbnb/javascript/tags",
        blobs_url:
          "https://api.github.com/repos/airbnb/javascript/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/airbnb/javascript/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/airbnb/javascript/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/airbnb/javascript/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/airbnb/javascript/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/airbnb/javascript/languages",
        stargazers_url:
          "https://api.github.com/repos/airbnb/javascript/stargazers",
        contributors_url:
          "https://api.github.com/repos/airbnb/javascript/contributors",
        subscribers_url:
          "https://api.github.com/repos/airbnb/javascript/subscribers",
        subscription_url:
          "https://api.github.com/repos/airbnb/javascript/subscription",
        commits_url:
          "https://api.github.com/repos/airbnb/javascript/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/airbnb/javascript/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/airbnb/javascript/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/airbnb/javascript/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/airbnb/javascript/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/airbnb/javascript/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/airbnb/javascript/merges",
        archive_url:
          "https://api.github.com/repos/airbnb/javascript/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/airbnb/javascript/downloads",
        issues_url:
          "https://api.github.com/repos/airbnb/javascript/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/airbnb/javascript/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/airbnb/javascript/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/airbnb/javascript/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/airbnb/javascript/labels{/name}",
        releases_url:
          "https://api.github.com/repos/airbnb/javascript/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/airbnb/javascript/deployments",
        created_at: "2012-11-01T23:13:50Z",
        updated_at: "2025-07-11T06:41:11Z",
        pushed_at: "2024-12-09T06:56:18Z",
        git_url: "git://github.com/airbnb/javascript.git",
        ssh_url: "git@github.com:airbnb/javascript.git",
        clone_url: "https://github.com/airbnb/javascript.git",
        svn_url: "https://github.com/airbnb/javascript",
        homepage: null,
        size: 3689,
        stargazers_count: 147052,
        watchers_count: 147052,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 26776,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 171,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "arrow-functions",
          "es2015",
          "es2016",
          "es2017",
          "es2018",
          "es6",
          "eslint",
          "javascript",
          "linting",
          "naming-conventions",
          "style-guide",
          "style-linter",
          "styleguide",
          "tc39",
        ],
        visibility: "public",
        forks: 26776,
        open_issues: 171,
        watchers: 147052,
        default_branch: "master",
        score: 1,
        order: 3,
      },
      {
        id: 70107786,
        node_id: "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
        name: "next.js",
        full_name: "vercel/next.js",
        private: false,
        owner: {
          login: "vercel",
          id: 14985020,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
          avatar_url: "https://avatars.githubusercontent.com/u/14985020?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/vercel",
          html_url: "https://github.com/vercel",
          followers_url: "https://api.github.com/users/vercel/followers",
          following_url:
            "https://api.github.com/users/vercel/following{/other_user}",
          gists_url: "https://api.github.com/users/vercel/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/vercel/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/vercel/subscriptions",
          organizations_url: "https://api.github.com/users/vercel/orgs",
          repos_url: "https://api.github.com/users/vercel/repos",
          events_url: "https://api.github.com/users/vercel/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/vercel/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/vercel/next.js",
        description: "The React Framework",
        fork: false,
        url: "https://api.github.com/repos/vercel/next.js",
        forks_url: "https://api.github.com/repos/vercel/next.js/forks",
        keys_url: "https://api.github.com/repos/vercel/next.js/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/vercel/next.js/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/vercel/next.js/teams",
        hooks_url: "https://api.github.com/repos/vercel/next.js/hooks",
        issue_events_url:
          "https://api.github.com/repos/vercel/next.js/issues/events{/number}",
        events_url: "https://api.github.com/repos/vercel/next.js/events",
        assignees_url:
          "https://api.github.com/repos/vercel/next.js/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/vercel/next.js/branches{/branch}",
        tags_url: "https://api.github.com/repos/vercel/next.js/tags",
        blobs_url:
          "https://api.github.com/repos/vercel/next.js/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/vercel/next.js/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/vercel/next.js/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/vercel/next.js/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/vercel/next.js/statuses/{sha}",
        languages_url: "https://api.github.com/repos/vercel/next.js/languages",
        stargazers_url:
          "https://api.github.com/repos/vercel/next.js/stargazers",
        contributors_url:
          "https://api.github.com/repos/vercel/next.js/contributors",
        subscribers_url:
          "https://api.github.com/repos/vercel/next.js/subscribers",
        subscription_url:
          "https://api.github.com/repos/vercel/next.js/subscription",
        commits_url:
          "https://api.github.com/repos/vercel/next.js/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/vercel/next.js/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/vercel/next.js/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/vercel/next.js/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/vercel/next.js/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/vercel/next.js/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/vercel/next.js/merges",
        archive_url:
          "https://api.github.com/repos/vercel/next.js/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/vercel/next.js/downloads",
        issues_url:
          "https://api.github.com/repos/vercel/next.js/issues{/number}",
        pulls_url: "https://api.github.com/repos/vercel/next.js/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/vercel/next.js/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/vercel/next.js/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/vercel/next.js/labels{/name}",
        releases_url:
          "https://api.github.com/repos/vercel/next.js/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/vercel/next.js/deployments",
        created_at: "2016-10-05T23:32:51Z",
        updated_at: "2025-07-11T09:31:17Z",
        pushed_at: "2025-07-11T09:11:43Z",
        git_url: "git://github.com/vercel/next.js.git",
        ssh_url: "git@github.com:vercel/next.js.git",
        clone_url: "https://github.com/vercel/next.js.git",
        svn_url: "https://github.com/vercel/next.js",
        homepage: "https://nextjs.org",
        size: 2287805,
        stargazers_count: 133061,
        watchers_count: 133061,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 28797,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 3254,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "blog",
          "browser",
          "compiler",
          "components",
          "hybrid",
          "nextjs",
          "node",
          "react",
          "server-rendering",
          "ssg",
          "static",
          "static-site-generator",
          "universal",
          "vercel",
        ],
        visibility: "public",
        forks: 28797,
        open_issues: 3254,
        watchers: 133061,
        default_branch: "canary",
        score: 1,
        order: 4,
      },
      {
        id: 574523116,
        node_id: "R_kgDOIj6G7A",
        name: "awesome-chatgpt-prompts",
        full_name: "f/awesome-chatgpt-prompts",
        private: false,
        owner: {
          login: "f",
          id: 196477,
          node_id: "MDQ6VXNlcjE5NjQ3Nw==",
          avatar_url: "https://avatars.githubusercontent.com/u/196477?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/f",
          html_url: "https://github.com/f",
          followers_url: "https://api.github.com/users/f/followers",
          following_url:
            "https://api.github.com/users/f/following{/other_user}",
          gists_url: "https://api.github.com/users/f/gists{/gist_id}",
          starred_url: "https://api.github.com/users/f/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/f/subscriptions",
          organizations_url: "https://api.github.com/users/f/orgs",
          repos_url: "https://api.github.com/users/f/repos",
          events_url: "https://api.github.com/users/f/events{/privacy}",
          received_events_url: "https://api.github.com/users/f/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/f/awesome-chatgpt-prompts",
        description:
          "This repo includes ChatGPT prompt curation to use ChatGPT and other LLM tools better.",
        fork: false,
        url: "https://api.github.com/repos/f/awesome-chatgpt-prompts",
        forks_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/forks",
        keys_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/teams",
        hooks_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/hooks",
        issue_events_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/events",
        assignees_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/branches{/branch}",
        tags_url: "https://api.github.com/repos/f/awesome-chatgpt-prompts/tags",
        blobs_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/languages",
        stargazers_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/stargazers",
        contributors_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/contributors",
        subscribers_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/subscribers",
        subscription_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/subscription",
        commits_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/merges",
        archive_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/downloads",
        issues_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/labels{/name}",
        releases_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/f/awesome-chatgpt-prompts/deployments",
        created_at: "2022-12-05T13:54:13Z",
        updated_at: "2025-07-11T09:33:10Z",
        pushed_at: "2025-07-10T18:23:02Z",
        git_url: "git://github.com/f/awesome-chatgpt-prompts.git",
        ssh_url: "git@github.com:f/awesome-chatgpt-prompts.git",
        clone_url: "https://github.com/f/awesome-chatgpt-prompts.git",
        svn_url: "https://github.com/f/awesome-chatgpt-prompts",
        homepage: "https://prompts.chat",
        size: 1509,
        stargazers_count: 130443,
        watchers_count: 130443,
        language: "JavaScript",
        has_issues: false,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: false,
        forks_count: 17292,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 273,
        license: {
          key: "cc0-1.0",
          name: "Creative Commons Zero v1.0 Universal",
          spdx_id: "CC0-1.0",
          url: "https://api.github.com/licenses/cc0-1.0",
          node_id: "MDc6TGljZW5zZTY=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["bots", "chatbot", "chatgpt", "chatgpt-api", "language"],
        visibility: "public",
        forks: 17292,
        open_issues: 273,
        watchers: 130443,
        default_branch: "main",
        score: 1,
        order: 5,
      },
      {
        id: 112507086,
        node_id: "MDEwOlJlcG9zaXRvcnkxMTI1MDcwODY=",
        name: "30-seconds-of-code",
        full_name: "Chalarangelo/30-seconds-of-code",
        private: false,
        owner: {
          login: "Chalarangelo",
          id: 8281875,
          node_id: "MDQ6VXNlcjgyODE4NzU=",
          avatar_url: "https://avatars.githubusercontent.com/u/8281875?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Chalarangelo",
          html_url: "https://github.com/Chalarangelo",
          followers_url: "https://api.github.com/users/Chalarangelo/followers",
          following_url:
            "https://api.github.com/users/Chalarangelo/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Chalarangelo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Chalarangelo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Chalarangelo/subscriptions",
          organizations_url: "https://api.github.com/users/Chalarangelo/orgs",
          repos_url: "https://api.github.com/users/Chalarangelo/repos",
          events_url:
            "https://api.github.com/users/Chalarangelo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Chalarangelo/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/Chalarangelo/30-seconds-of-code",
        description: "Coding articles to level up your development skills",
        fork: false,
        url: "https://api.github.com/repos/Chalarangelo/30-seconds-of-code",
        forks_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/forks",
        keys_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/teams",
        hooks_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/hooks",
        issue_events_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/events",
        assignees_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/tags",
        blobs_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/languages",
        stargazers_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/stargazers",
        contributors_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/contributors",
        subscribers_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/subscribers",
        subscription_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/subscription",
        commits_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/merges",
        archive_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/downloads",
        issues_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Chalarangelo/30-seconds-of-code/deployments",
        created_at: "2017-11-29T17:35:03Z",
        updated_at: "2025-07-11T09:11:31Z",
        pushed_at: "2025-06-29T17:33:12Z",
        git_url: "git://github.com/Chalarangelo/30-seconds-of-code.git",
        ssh_url: "git@github.com:Chalarangelo/30-seconds-of-code.git",
        clone_url: "https://github.com/Chalarangelo/30-seconds-of-code.git",
        svn_url: "https://github.com/Chalarangelo/30-seconds-of-code",
        homepage: "https://30secondsofcode.org/",
        size: 740362,
        stargazers_count: 124479,
        watchers_count: 124479,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 12244,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: {
          key: "cc-by-4.0",
          name: "Creative Commons Attribution 4.0 International",
          spdx_id: "CC-BY-4.0",
          url: "https://api.github.com/licenses/cc-by-4.0",
          node_id: "MDc6TGljZW5zZTI1",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: true,
        topics: [
          "astro",
          "awesome-list",
          "css",
          "education",
          "es6-javascript",
          "git",
          "html",
          "javascript",
          "learn-to-code",
          "learning-resources",
          "nodejs",
          "programming",
          "snippets",
        ],
        visibility: "public",
        forks: 12244,
        open_issues: 2,
        watchers: 124479,
        default_branch: "master",
        score: 1,
        order: 6,
      },
      {
        id: 27193779,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzE5Mzc3OQ==",
        name: "node",
        full_name: "nodejs/node",
        private: false,
        owner: {
          login: "nodejs",
          id: 9950313,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjk5NTAzMTM=",
          avatar_url: "https://avatars.githubusercontent.com/u/9950313?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/nodejs",
          html_url: "https://github.com/nodejs",
          followers_url: "https://api.github.com/users/nodejs/followers",
          following_url:
            "https://api.github.com/users/nodejs/following{/other_user}",
          gists_url: "https://api.github.com/users/nodejs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/nodejs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/nodejs/subscriptions",
          organizations_url: "https://api.github.com/users/nodejs/orgs",
          repos_url: "https://api.github.com/users/nodejs/repos",
          events_url: "https://api.github.com/users/nodejs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/nodejs/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/nodejs/node",
        description: "Node.js JavaScript runtime ✨🐢🚀✨",
        fork: false,
        url: "https://api.github.com/repos/nodejs/node",
        forks_url: "https://api.github.com/repos/nodejs/node/forks",
        keys_url: "https://api.github.com/repos/nodejs/node/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/nodejs/node/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/nodejs/node/teams",
        hooks_url: "https://api.github.com/repos/nodejs/node/hooks",
        issue_events_url:
          "https://api.github.com/repos/nodejs/node/issues/events{/number}",
        events_url: "https://api.github.com/repos/nodejs/node/events",
        assignees_url:
          "https://api.github.com/repos/nodejs/node/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/nodejs/node/branches{/branch}",
        tags_url: "https://api.github.com/repos/nodejs/node/tags",
        blobs_url: "https://api.github.com/repos/nodejs/node/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/nodejs/node/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/nodejs/node/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/nodejs/node/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/nodejs/node/statuses/{sha}",
        languages_url: "https://api.github.com/repos/nodejs/node/languages",
        stargazers_url: "https://api.github.com/repos/nodejs/node/stargazers",
        contributors_url:
          "https://api.github.com/repos/nodejs/node/contributors",
        subscribers_url: "https://api.github.com/repos/nodejs/node/subscribers",
        subscription_url:
          "https://api.github.com/repos/nodejs/node/subscription",
        commits_url: "https://api.github.com/repos/nodejs/node/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/nodejs/node/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/nodejs/node/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/nodejs/node/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/nodejs/node/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/nodejs/node/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/nodejs/node/merges",
        archive_url:
          "https://api.github.com/repos/nodejs/node/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/nodejs/node/downloads",
        issues_url: "https://api.github.com/repos/nodejs/node/issues{/number}",
        pulls_url: "https://api.github.com/repos/nodejs/node/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/nodejs/node/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/nodejs/node/labels{/name}",
        releases_url: "https://api.github.com/repos/nodejs/node/releases{/id}",
        deployments_url: "https://api.github.com/repos/nodejs/node/deployments",
        created_at: "2014-11-26T19:57:11Z",
        updated_at: "2025-07-11T07:48:26Z",
        pushed_at: "2025-07-11T07:38:25Z",
        git_url: "git://github.com/nodejs/node.git",
        ssh_url: "git@github.com:nodejs/node.git",
        clone_url: "https://github.com/nodejs/node.git",
        svn_url: "https://github.com/nodejs/node",
        homepage: "https://nodejs.org",
        size: 1351380,
        stargazers_count: 112136,
        watchers_count: 112136,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 32080,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2273,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "javascript",
          "js",
          "linux",
          "macos",
          "mit",
          "node",
          "nodejs",
          "runtime",
          "windows",
        ],
        visibility: "public",
        forks: 32080,
        open_issues: 2273,
        watchers: 112136,
        default_branch: "main",
        score: 1,
        order: 7,
      },
      {
        id: 576201,
        node_id: "MDEwOlJlcG9zaXRvcnk1NzYyMDE=",
        name: "three.js",
        full_name: "mrdoob/three.js",
        private: false,
        owner: {
          login: "mrdoob",
          id: 97088,
          node_id: "MDQ6VXNlcjk3MDg4",
          avatar_url: "https://avatars.githubusercontent.com/u/97088?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mrdoob",
          html_url: "https://github.com/mrdoob",
          followers_url: "https://api.github.com/users/mrdoob/followers",
          following_url:
            "https://api.github.com/users/mrdoob/following{/other_user}",
          gists_url: "https://api.github.com/users/mrdoob/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mrdoob/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mrdoob/subscriptions",
          organizations_url: "https://api.github.com/users/mrdoob/orgs",
          repos_url: "https://api.github.com/users/mrdoob/repos",
          events_url: "https://api.github.com/users/mrdoob/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mrdoob/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/mrdoob/three.js",
        description: "JavaScript 3D Library.",
        fork: false,
        url: "https://api.github.com/repos/mrdoob/three.js",
        forks_url: "https://api.github.com/repos/mrdoob/three.js/forks",
        keys_url: "https://api.github.com/repos/mrdoob/three.js/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/mrdoob/three.js/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/mrdoob/three.js/teams",
        hooks_url: "https://api.github.com/repos/mrdoob/three.js/hooks",
        issue_events_url:
          "https://api.github.com/repos/mrdoob/three.js/issues/events{/number}",
        events_url: "https://api.github.com/repos/mrdoob/three.js/events",
        assignees_url:
          "https://api.github.com/repos/mrdoob/three.js/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/mrdoob/three.js/branches{/branch}",
        tags_url: "https://api.github.com/repos/mrdoob/three.js/tags",
        blobs_url:
          "https://api.github.com/repos/mrdoob/three.js/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/mrdoob/three.js/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/mrdoob/three.js/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/mrdoob/three.js/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/mrdoob/three.js/statuses/{sha}",
        languages_url: "https://api.github.com/repos/mrdoob/three.js/languages",
        stargazers_url:
          "https://api.github.com/repos/mrdoob/three.js/stargazers",
        contributors_url:
          "https://api.github.com/repos/mrdoob/three.js/contributors",
        subscribers_url:
          "https://api.github.com/repos/mrdoob/three.js/subscribers",
        subscription_url:
          "https://api.github.com/repos/mrdoob/three.js/subscription",
        commits_url:
          "https://api.github.com/repos/mrdoob/three.js/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/mrdoob/three.js/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/mrdoob/three.js/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/mrdoob/three.js/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/mrdoob/three.js/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/mrdoob/three.js/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/mrdoob/three.js/merges",
        archive_url:
          "https://api.github.com/repos/mrdoob/three.js/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/mrdoob/three.js/downloads",
        issues_url:
          "https://api.github.com/repos/mrdoob/three.js/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/mrdoob/three.js/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/mrdoob/three.js/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/mrdoob/three.js/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/mrdoob/three.js/labels{/name}",
        releases_url:
          "https://api.github.com/repos/mrdoob/three.js/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/mrdoob/three.js/deployments",
        created_at: "2010-03-23T18:58:01Z",
        updated_at: "2025-07-11T09:23:24Z",
        pushed_at: "2025-07-11T09:23:18Z",
        git_url: "git://github.com/mrdoob/three.js.git",
        ssh_url: "git@github.com:mrdoob/three.js.git",
        clone_url: "https://github.com/mrdoob/three.js.git",
        svn_url: "https://github.com/mrdoob/three.js",
        homepage: "https://threejs.org/",
        size: 1447642,
        stargazers_count: 107539,
        watchers_count: 107539,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: false,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 35885,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 567,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "3d",
          "augmented-reality",
          "canvas",
          "html5",
          "javascript",
          "svg",
          "virtual-reality",
          "webaudio",
          "webgl",
          "webgl2",
          "webgpu",
          "webxr",
        ],
        visibility: "public",
        forks: 35885,
        open_issues: 567,
        watchers: 107539,
        default_branch: "dev",
        score: 1,
        order: 8,
      },
      {
        id: 23088740,
        node_id: "MDEwOlJlcG9zaXRvcnkyMzA4ODc0MA==",
        name: "axios",
        full_name: "axios/axios",
        private: false,
        owner: {
          login: "axios",
          id: 32372333,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjMyMzcyMzMz",
          avatar_url: "https://avatars.githubusercontent.com/u/32372333?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/axios",
          html_url: "https://github.com/axios",
          followers_url: "https://api.github.com/users/axios/followers",
          following_url:
            "https://api.github.com/users/axios/following{/other_user}",
          gists_url: "https://api.github.com/users/axios/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/axios/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/axios/subscriptions",
          organizations_url: "https://api.github.com/users/axios/orgs",
          repos_url: "https://api.github.com/users/axios/repos",
          events_url: "https://api.github.com/users/axios/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/axios/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/axios/axios",
        description: "Promise based HTTP client for the browser and node.js",
        fork: false,
        url: "https://api.github.com/repos/axios/axios",
        forks_url: "https://api.github.com/repos/axios/axios/forks",
        keys_url: "https://api.github.com/repos/axios/axios/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/axios/axios/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/axios/axios/teams",
        hooks_url: "https://api.github.com/repos/axios/axios/hooks",
        issue_events_url:
          "https://api.github.com/repos/axios/axios/issues/events{/number}",
        events_url: "https://api.github.com/repos/axios/axios/events",
        assignees_url:
          "https://api.github.com/repos/axios/axios/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/axios/axios/branches{/branch}",
        tags_url: "https://api.github.com/repos/axios/axios/tags",
        blobs_url: "https://api.github.com/repos/axios/axios/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/axios/axios/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/axios/axios/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/axios/axios/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/axios/axios/statuses/{sha}",
        languages_url: "https://api.github.com/repos/axios/axios/languages",
        stargazers_url: "https://api.github.com/repos/axios/axios/stargazers",
        contributors_url:
          "https://api.github.com/repos/axios/axios/contributors",
        subscribers_url: "https://api.github.com/repos/axios/axios/subscribers",
        subscription_url:
          "https://api.github.com/repos/axios/axios/subscription",
        commits_url: "https://api.github.com/repos/axios/axios/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/axios/axios/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/axios/axios/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/axios/axios/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/axios/axios/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/axios/axios/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/axios/axios/merges",
        archive_url:
          "https://api.github.com/repos/axios/axios/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/axios/axios/downloads",
        issues_url: "https://api.github.com/repos/axios/axios/issues{/number}",
        pulls_url: "https://api.github.com/repos/axios/axios/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/axios/axios/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/axios/axios/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/axios/axios/labels{/name}",
        releases_url: "https://api.github.com/repos/axios/axios/releases{/id}",
        deployments_url: "https://api.github.com/repos/axios/axios/deployments",
        created_at: "2014-08-18T22:30:27Z",
        updated_at: "2025-07-11T09:02:55Z",
        pushed_at: "2025-07-06T14:59:56Z",
        git_url: "git://github.com/axios/axios.git",
        ssh_url: "git@github.com:axios/axios.git",
        clone_url: "https://github.com/axios/axios.git",
        svn_url: "https://github.com/axios/axios",
        homepage: "https://axios-http.com",
        size: 20182,
        stargazers_count: 107198,
        watchers_count: 107198,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 11165,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 687,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "hacktoberfest",
          "http-client",
          "javascript",
          "nodejs",
          "promise",
        ],
        visibility: "public",
        forks: 11165,
        open_issues: 687,
        watchers: 107198,
        default_branch: "v1.x",
        score: 1,
        order: 9,
      },
      {
        id: 63537249,
        node_id: "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
        name: "create-react-app",
        full_name: "facebook/create-react-app",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/create-react-app",
        description: "Set up a modern web app by running one command.",
        fork: false,
        url: "https://api.github.com/repos/facebook/create-react-app",
        forks_url:
          "https://api.github.com/repos/facebook/create-react-app/forks",
        keys_url:
          "https://api.github.com/repos/facebook/create-react-app/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/create-react-app/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/facebook/create-react-app/teams",
        hooks_url:
          "https://api.github.com/repos/facebook/create-react-app/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/create-react-app/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/facebook/create-react-app/events",
        assignees_url:
          "https://api.github.com/repos/facebook/create-react-app/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/create-react-app/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/create-react-app/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/create-react-app/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/create-react-app/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/create-react-app/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/create-react-app/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/create-react-app/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/facebook/create-react-app/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/create-react-app/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/create-react-app/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/create-react-app/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/create-react-app/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/create-react-app/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/create-react-app/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/create-react-app/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/create-react-app/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/create-react-app/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/create-react-app/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/facebook/create-react-app/merges",
        archive_url:
          "https://api.github.com/repos/facebook/create-react-app/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/facebook/create-react-app/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/create-react-app/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/facebook/create-react-app/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/create-react-app/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/create-react-app/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/facebook/create-react-app/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/create-react-app/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/create-react-app/deployments",
        created_at: "2016-07-17T14:55:11Z",
        updated_at: "2025-07-11T09:20:06Z",
        pushed_at: "2025-02-15T01:32:11Z",
        git_url: "git://github.com/facebook/create-react-app.git",
        ssh_url: "git@github.com:facebook/create-react-app.git",
        clone_url: "https://github.com/facebook/create-react-app.git",
        svn_url: "https://github.com/facebook/create-react-app",
        homepage: "https://create-react-app.dev",
        size: 25186,
        stargazers_count: 103354,
        watchers_count: 103354,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: true,
        has_discussions: true,
        forks_count: 27035,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2324,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["build-tools", "react", "zero-configuration"],
        visibility: "public",
        forks: 27035,
        open_issues: 2324,
        watchers: 103354,
        default_branch: "main",
        score: 1,
        order: 10,
      },
      {
        id: 701547123,
        node_id: "R_kgDOKdDCcw",
        name: "open-webui",
        full_name: "open-webui/open-webui",
        private: false,
        owner: {
          login: "open-webui",
          id: 158137808,
          node_id: "O_kgDOCWz90A",
          avatar_url: "https://avatars.githubusercontent.com/u/158137808?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/open-webui",
          html_url: "https://github.com/open-webui",
          followers_url: "https://api.github.com/users/open-webui/followers",
          following_url:
            "https://api.github.com/users/open-webui/following{/other_user}",
          gists_url: "https://api.github.com/users/open-webui/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/open-webui/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/open-webui/subscriptions",
          organizations_url: "https://api.github.com/users/open-webui/orgs",
          repos_url: "https://api.github.com/users/open-webui/repos",
          events_url:
            "https://api.github.com/users/open-webui/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/open-webui/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/open-webui/open-webui",
        description:
          "User-friendly AI Interface (Supports Ollama, OpenAI API, ...)",
        fork: false,
        url: "https://api.github.com/repos/open-webui/open-webui",
        forks_url: "https://api.github.com/repos/open-webui/open-webui/forks",
        keys_url:
          "https://api.github.com/repos/open-webui/open-webui/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/open-webui/open-webui/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/open-webui/open-webui/teams",
        hooks_url: "https://api.github.com/repos/open-webui/open-webui/hooks",
        issue_events_url:
          "https://api.github.com/repos/open-webui/open-webui/issues/events{/number}",
        events_url: "https://api.github.com/repos/open-webui/open-webui/events",
        assignees_url:
          "https://api.github.com/repos/open-webui/open-webui/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/open-webui/open-webui/branches{/branch}",
        tags_url: "https://api.github.com/repos/open-webui/open-webui/tags",
        blobs_url:
          "https://api.github.com/repos/open-webui/open-webui/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/open-webui/open-webui/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/open-webui/open-webui/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/open-webui/open-webui/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/open-webui/open-webui/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/open-webui/open-webui/languages",
        stargazers_url:
          "https://api.github.com/repos/open-webui/open-webui/stargazers",
        contributors_url:
          "https://api.github.com/repos/open-webui/open-webui/contributors",
        subscribers_url:
          "https://api.github.com/repos/open-webui/open-webui/subscribers",
        subscription_url:
          "https://api.github.com/repos/open-webui/open-webui/subscription",
        commits_url:
          "https://api.github.com/repos/open-webui/open-webui/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/open-webui/open-webui/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/open-webui/open-webui/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/open-webui/open-webui/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/open-webui/open-webui/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/open-webui/open-webui/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/open-webui/open-webui/merges",
        archive_url:
          "https://api.github.com/repos/open-webui/open-webui/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/open-webui/open-webui/downloads",
        issues_url:
          "https://api.github.com/repos/open-webui/open-webui/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/open-webui/open-webui/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/open-webui/open-webui/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/open-webui/open-webui/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/open-webui/open-webui/labels{/name}",
        releases_url:
          "https://api.github.com/repos/open-webui/open-webui/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/open-webui/open-webui/deployments",
        created_at: "2023-10-06T22:08:27Z",
        updated_at: "2025-07-11T09:33:30Z",
        pushed_at: "2025-07-11T08:39:59Z",
        git_url: "git://github.com/open-webui/open-webui.git",
        ssh_url: "git@github.com:open-webui/open-webui.git",
        clone_url: "https://github.com/open-webui/open-webui.git",
        svn_url: "https://github.com/open-webui/open-webui",
        homepage: "https://openwebui.com",
        size: 242386,
        stargazers_count: 102156,
        watchers_count: 102156,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 13625,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 239,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "ai",
          "llm",
          "llm-ui",
          "llm-webui",
          "llms",
          "mcp",
          "ollama",
          "ollama-webui",
          "open-webui",
          "openai",
          "openapi",
          "rag",
          "self-hosted",
          "ui",
          "webui",
        ],
        visibility: "public",
        forks: 13625,
        open_issues: 239,
        watchers: 102156,
        default_branch: "main",
        score: 1,
        order: 11,
      },
      {
        id: 74791366,
        node_id: "MDEwOlJlcG9zaXRvcnk3NDc5MTM2Ng==",
        name: "clean-code-javascript",
        full_name: "ryanmcdermott/clean-code-javascript",
        private: false,
        owner: {
          login: "ryanmcdermott",
          id: 5114666,
          node_id: "MDQ6VXNlcjUxMTQ2NjY=",
          avatar_url: "https://avatars.githubusercontent.com/u/5114666?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ryanmcdermott",
          html_url: "https://github.com/ryanmcdermott",
          followers_url: "https://api.github.com/users/ryanmcdermott/followers",
          following_url:
            "https://api.github.com/users/ryanmcdermott/following{/other_user}",
          gists_url:
            "https://api.github.com/users/ryanmcdermott/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ryanmcdermott/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ryanmcdermott/subscriptions",
          organizations_url: "https://api.github.com/users/ryanmcdermott/orgs",
          repos_url: "https://api.github.com/users/ryanmcdermott/repos",
          events_url:
            "https://api.github.com/users/ryanmcdermott/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ryanmcdermott/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/ryanmcdermott/clean-code-javascript",
        description: "Clean Code concepts adapted for JavaScript",
        fork: false,
        url: "https://api.github.com/repos/ryanmcdermott/clean-code-javascript",
        forks_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/forks",
        keys_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/teams",
        hooks_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/hooks",
        issue_events_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/events",
        assignees_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/tags",
        blobs_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/languages",
        stargazers_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/stargazers",
        contributors_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/contributors",
        subscribers_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/subscribers",
        subscription_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/subscription",
        commits_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/merges",
        archive_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/downloads",
        issues_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/labels{/name}",
        releases_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/ryanmcdermott/clean-code-javascript/deployments",
        created_at: "2016-11-25T22:25:41Z",
        updated_at: "2025-07-11T04:24:25Z",
        pushed_at: "2024-07-29T07:24:37Z",
        git_url: "git://github.com/ryanmcdermott/clean-code-javascript.git",
        ssh_url: "git@github.com:ryanmcdermott/clean-code-javascript.git",
        clone_url: "https://github.com/ryanmcdermott/clean-code-javascript.git",
        svn_url: "https://github.com/ryanmcdermott/clean-code-javascript",
        homepage: "",
        size: 520,
        stargazers_count: 93196,
        watchers_count: 93196,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 12450,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 109,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "best-practices",
          "clean-architecture",
          "clean-code",
          "composition",
          "inheritance",
          "javascript",
          "principles",
        ],
        visibility: "public",
        forks: 12450,
        open_issues: 109,
        watchers: 93196,
        default_branch: "master",
        score: 1,
        order: 12,
      },
    ],
  },
  {
    key: "asd12eqsdacqsdawe",
    data: [
      {
        id: 311525798,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTE1MjU3OTg=",
        name: "Web-Dev-For-Beginners",
        full_name: "microsoft/Web-Dev-For-Beginners",
        private: false,
        owner: {
          login: "microsoft",
          id: 6154722,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
          avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/microsoft",
          html_url: "https://github.com/microsoft",
          followers_url: "https://api.github.com/users/microsoft/followers",
          following_url:
            "https://api.github.com/users/microsoft/following{/other_user}",
          gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/microsoft/subscriptions",
          organizations_url: "https://api.github.com/users/microsoft/orgs",
          repos_url: "https://api.github.com/users/microsoft/repos",
          events_url: "https://api.github.com/users/microsoft/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/microsoft/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/microsoft/Web-Dev-For-Beginners",
        description: "24 Lessons, 12 Weeks, Get Started as a Web Developer",
        fork: false,
        url: "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners",
        forks_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/forks",
        keys_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/teams",
        hooks_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/hooks",
        issue_events_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/events",
        assignees_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/tags",
        blobs_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/languages",
        stargazers_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/stargazers",
        contributors_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/contributors",
        subscribers_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/subscribers",
        subscription_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/subscription",
        commits_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/merges",
        archive_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/downloads",
        issues_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/labels{/name}",
        releases_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/microsoft/Web-Dev-For-Beginners/deployments",
        created_at: "2020-11-10T02:44:00Z",
        updated_at: "2025-07-11T08:53:49Z",
        pushed_at: "2025-05-29T17:34:21Z",
        git_url: "git://github.com/microsoft/Web-Dev-For-Beginners.git",
        ssh_url: "git@github.com:microsoft/Web-Dev-For-Beginners.git",
        clone_url: "https://github.com/microsoft/Web-Dev-For-Beginners.git",
        svn_url: "https://github.com/microsoft/Web-Dev-For-Beginners",
        homepage: "https://microsoft.github.io/Web-Dev-For-Beginners/",
        size: 95743,
        stargazers_count: 90413,
        watchers_count: 90413,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 13662,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 150,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: true,
        web_commit_signoff_required: false,
        topics: [
          "css",
          "curriculum",
          "education",
          "html",
          "javascript",
          "learning",
          "microsoft-for-beginners",
          "tutorials",
        ],
        visibility: "public",
        forks: 13662,
        open_issues: 150,
        watchers: 90413,
        default_branch: "main",
        score: 1,
        order: 13,
      },
      {
        id: 63539055,
        node_id: "MDEwOlJlcG9zaXRvcnk2MzUzOTA1NQ==",
        name: "awesome-mac",
        full_name: "jaywcjlove/awesome-mac",
        private: false,
        owner: {
          login: "jaywcjlove",
          id: 1680273,
          node_id: "MDQ6VXNlcjE2ODAyNzM=",
          avatar_url: "https://avatars.githubusercontent.com/u/1680273?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jaywcjlove",
          html_url: "https://github.com/jaywcjlove",
          followers_url: "https://api.github.com/users/jaywcjlove/followers",
          following_url:
            "https://api.github.com/users/jaywcjlove/following{/other_user}",
          gists_url: "https://api.github.com/users/jaywcjlove/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jaywcjlove/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jaywcjlove/subscriptions",
          organizations_url: "https://api.github.com/users/jaywcjlove/orgs",
          repos_url: "https://api.github.com/users/jaywcjlove/repos",
          events_url:
            "https://api.github.com/users/jaywcjlove/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jaywcjlove/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/jaywcjlove/awesome-mac",
        description:
          " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
        fork: false,
        url: "https://api.github.com/repos/jaywcjlove/awesome-mac",
        forks_url: "https://api.github.com/repos/jaywcjlove/awesome-mac/forks",
        keys_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jaywcjlove/awesome-mac/teams",
        hooks_url: "https://api.github.com/repos/jaywcjlove/awesome-mac/hooks",
        issue_events_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/events",
        assignees_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/branches{/branch}",
        tags_url: "https://api.github.com/repos/jaywcjlove/awesome-mac/tags",
        blobs_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/languages",
        stargazers_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/stargazers",
        contributors_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/contributors",
        subscribers_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/subscribers",
        subscription_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/subscription",
        commits_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/merges",
        archive_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/downloads",
        issues_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jaywcjlove/awesome-mac/deployments",
        created_at: "2016-07-17T15:33:47Z",
        updated_at: "2025-07-11T09:16:05Z",
        pushed_at: "2025-07-11T07:40:11Z",
        git_url: "git://github.com/jaywcjlove/awesome-mac.git",
        ssh_url: "git@github.com:jaywcjlove/awesome-mac.git",
        clone_url: "https://github.com/jaywcjlove/awesome-mac.git",
        svn_url: "https://github.com/jaywcjlove/awesome-mac",
        homepage: "https://git.io/macx",
        size: 21800,
        stargazers_count: 84760,
        watchers_count: 84760,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 6593,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 149,
        license: {
          key: "cc0-1.0",
          name: "Creative Commons Zero v1.0 Universal",
          spdx_id: "CC0-1.0",
          url: "https://api.github.com/licenses/cc0-1.0",
          node_id: "MDc6TGljZW5zZTY=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "app",
          "apple",
          "application",
          "apps",
          "awesome",
          "awesome-list",
          "awesome-lists",
          "awesome-mac",
          "desktop-app",
          "desktop-application",
          "desktop-apps",
          "list",
          "mac",
          "mac-osx",
          "macos",
          "macos-app",
          "macos-apps",
          "macosx",
          "software",
        ],
        visibility: "public",
        forks: 6593,
        open_issues: 149,
        watchers: 84760,
        default_branch: "master",
        score: 1,
        order: 14,
      },
      {
        id: 74293321,
        node_id: "MDEwOlJlcG9zaXRvcnk3NDI5MzMyMQ==",
        name: "svelte",
        full_name: "sveltejs/svelte",
        private: false,
        owner: {
          login: "sveltejs",
          id: 23617963,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjIzNjE3OTYz",
          avatar_url: "https://avatars.githubusercontent.com/u/23617963?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sveltejs",
          html_url: "https://github.com/sveltejs",
          followers_url: "https://api.github.com/users/sveltejs/followers",
          following_url:
            "https://api.github.com/users/sveltejs/following{/other_user}",
          gists_url: "https://api.github.com/users/sveltejs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sveltejs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sveltejs/subscriptions",
          organizations_url: "https://api.github.com/users/sveltejs/orgs",
          repos_url: "https://api.github.com/users/sveltejs/repos",
          events_url: "https://api.github.com/users/sveltejs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sveltejs/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/sveltejs/svelte",
        description: "web development for the rest of us",
        fork: false,
        url: "https://api.github.com/repos/sveltejs/svelte",
        forks_url: "https://api.github.com/repos/sveltejs/svelte/forks",
        keys_url: "https://api.github.com/repos/sveltejs/svelte/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/sveltejs/svelte/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/sveltejs/svelte/teams",
        hooks_url: "https://api.github.com/repos/sveltejs/svelte/hooks",
        issue_events_url:
          "https://api.github.com/repos/sveltejs/svelte/issues/events{/number}",
        events_url: "https://api.github.com/repos/sveltejs/svelte/events",
        assignees_url:
          "https://api.github.com/repos/sveltejs/svelte/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/sveltejs/svelte/branches{/branch}",
        tags_url: "https://api.github.com/repos/sveltejs/svelte/tags",
        blobs_url:
          "https://api.github.com/repos/sveltejs/svelte/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/sveltejs/svelte/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/sveltejs/svelte/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/sveltejs/svelte/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/sveltejs/svelte/statuses/{sha}",
        languages_url: "https://api.github.com/repos/sveltejs/svelte/languages",
        stargazers_url:
          "https://api.github.com/repos/sveltejs/svelte/stargazers",
        contributors_url:
          "https://api.github.com/repos/sveltejs/svelte/contributors",
        subscribers_url:
          "https://api.github.com/repos/sveltejs/svelte/subscribers",
        subscription_url:
          "https://api.github.com/repos/sveltejs/svelte/subscription",
        commits_url:
          "https://api.github.com/repos/sveltejs/svelte/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/sveltejs/svelte/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/sveltejs/svelte/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/sveltejs/svelte/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/sveltejs/svelte/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/sveltejs/svelte/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/sveltejs/svelte/merges",
        archive_url:
          "https://api.github.com/repos/sveltejs/svelte/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/sveltejs/svelte/downloads",
        issues_url:
          "https://api.github.com/repos/sveltejs/svelte/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/sveltejs/svelte/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/sveltejs/svelte/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/sveltejs/svelte/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/sveltejs/svelte/labels{/name}",
        releases_url:
          "https://api.github.com/repos/sveltejs/svelte/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/sveltejs/svelte/deployments",
        created_at: "2016-11-20T18:13:05Z",
        updated_at: "2025-07-11T08:20:03Z",
        pushed_at: "2025-07-11T00:43:24Z",
        git_url: "git://github.com/sveltejs/svelte.git",
        ssh_url: "git@github.com:sveltejs/svelte.git",
        clone_url: "https://github.com/sveltejs/svelte.git",
        svn_url: "https://github.com/sveltejs/svelte",
        homepage: "https://svelte.dev",
        size: 115329,
        stargazers_count: 83359,
        watchers_count: 83359,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 4560,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 815,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["compiler", "template", "ui"],
        visibility: "public",
        forks: 4560,
        open_issues: 815,
        watchers: 83359,
        default_branch: "main",
        score: 1,
        order: 15,
      },
      {
        id: 3470471,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDcwNDcx",
        name: "Font-Awesome",
        full_name: "FortAwesome/Font-Awesome",
        private: false,
        owner: {
          login: "FortAwesome",
          id: 1505683,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjE1MDU2ODM=",
          avatar_url: "https://avatars.githubusercontent.com/u/1505683?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/FortAwesome",
          html_url: "https://github.com/FortAwesome",
          followers_url: "https://api.github.com/users/FortAwesome/followers",
          following_url:
            "https://api.github.com/users/FortAwesome/following{/other_user}",
          gists_url: "https://api.github.com/users/FortAwesome/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/FortAwesome/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/FortAwesome/subscriptions",
          organizations_url: "https://api.github.com/users/FortAwesome/orgs",
          repos_url: "https://api.github.com/users/FortAwesome/repos",
          events_url:
            "https://api.github.com/users/FortAwesome/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/FortAwesome/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/FortAwesome/Font-Awesome",
        description: "The iconic SVG, font, and CSS toolkit",
        fork: false,
        url: "https://api.github.com/repos/FortAwesome/Font-Awesome",
        forks_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/forks",
        keys_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/teams",
        hooks_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/hooks",
        issue_events_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/events",
        assignees_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/branches{/branch}",
        tags_url: "https://api.github.com/repos/FortAwesome/Font-Awesome/tags",
        blobs_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/languages",
        stargazers_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/stargazers",
        contributors_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/contributors",
        subscribers_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/subscribers",
        subscription_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/subscription",
        commits_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/merges",
        archive_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/downloads",
        issues_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/labels{/name}",
        releases_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/FortAwesome/Font-Awesome/deployments",
        created_at: "2012-02-17T14:19:43Z",
        updated_at: "2025-07-11T07:31:29Z",
        pushed_at: "2024-12-16T21:32:57Z",
        git_url: "git://github.com/FortAwesome/Font-Awesome.git",
        ssh_url: "git@github.com:FortAwesome/Font-Awesome.git",
        clone_url: "https://github.com/FortAwesome/Font-Awesome.git",
        svn_url: "https://github.com/FortAwesome/Font-Awesome",
        homepage: "https://fontawesome.com",
        size: 132252,
        stargazers_count: 75426,
        watchers_count: 75426,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 12216,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 4136,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "css",
          "font",
          "fontawesome",
          "icons",
          "svg-icons",
          "svg-sprites",
          "webfont",
        ],
        visibility: "public",
        forks: 12216,
        open_issues: 4136,
        watchers: 75426,
        default_branch: "6.x",
        score: 1,
        order: 16,
      },
      {
        id: 14747598,
        node_id: "MDEwOlJlcG9zaXRvcnkxNDc0NzU5OA==",
        name: "json-server",
        full_name: "typicode/json-server",
        private: false,
        owner: {
          login: "typicode",
          id: 5502029,
          node_id: "MDQ6VXNlcjU1MDIwMjk=",
          avatar_url: "https://avatars.githubusercontent.com/u/5502029?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/typicode",
          html_url: "https://github.com/typicode",
          followers_url: "https://api.github.com/users/typicode/followers",
          following_url:
            "https://api.github.com/users/typicode/following{/other_user}",
          gists_url: "https://api.github.com/users/typicode/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/typicode/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/typicode/subscriptions",
          organizations_url: "https://api.github.com/users/typicode/orgs",
          repos_url: "https://api.github.com/users/typicode/repos",
          events_url: "https://api.github.com/users/typicode/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/typicode/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/typicode/json-server",
        description:
          "Get a full fake REST API with zero coding in less than 30 seconds (seriously)",
        fork: false,
        url: "https://api.github.com/repos/typicode/json-server",
        forks_url: "https://api.github.com/repos/typicode/json-server/forks",
        keys_url:
          "https://api.github.com/repos/typicode/json-server/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/typicode/json-server/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/typicode/json-server/teams",
        hooks_url: "https://api.github.com/repos/typicode/json-server/hooks",
        issue_events_url:
          "https://api.github.com/repos/typicode/json-server/issues/events{/number}",
        events_url: "https://api.github.com/repos/typicode/json-server/events",
        assignees_url:
          "https://api.github.com/repos/typicode/json-server/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/typicode/json-server/branches{/branch}",
        tags_url: "https://api.github.com/repos/typicode/json-server/tags",
        blobs_url:
          "https://api.github.com/repos/typicode/json-server/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/typicode/json-server/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/typicode/json-server/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/typicode/json-server/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/typicode/json-server/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/typicode/json-server/languages",
        stargazers_url:
          "https://api.github.com/repos/typicode/json-server/stargazers",
        contributors_url:
          "https://api.github.com/repos/typicode/json-server/contributors",
        subscribers_url:
          "https://api.github.com/repos/typicode/json-server/subscribers",
        subscription_url:
          "https://api.github.com/repos/typicode/json-server/subscription",
        commits_url:
          "https://api.github.com/repos/typicode/json-server/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/typicode/json-server/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/typicode/json-server/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/typicode/json-server/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/typicode/json-server/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/typicode/json-server/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/typicode/json-server/merges",
        archive_url:
          "https://api.github.com/repos/typicode/json-server/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/typicode/json-server/downloads",
        issues_url:
          "https://api.github.com/repos/typicode/json-server/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/typicode/json-server/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/typicode/json-server/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/typicode/json-server/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/typicode/json-server/labels{/name}",
        releases_url:
          "https://api.github.com/repos/typicode/json-server/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/typicode/json-server/deployments",
        created_at: "2013-11-27T13:21:13Z",
        updated_at: "2025-07-11T09:07:11Z",
        pushed_at: "2025-03-31T11:11:50Z",
        git_url: "git://github.com/typicode/json-server.git",
        ssh_url: "git@github.com:typicode/json-server.git",
        clone_url: "https://github.com/typicode/json-server.git",
        svn_url: "https://github.com/typicode/json-server",
        homepage: "",
        size: 4507,
        stargazers_count: 74588,
        watchers_count: 74588,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: false,
        forks_count: 7188,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 717,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 7188,
        open_issues: 717,
        watchers: 74588,
        default_branch: "main",
        score: 1,
        order: 17,
      },
      {
        id: 278335273,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzgzMzUyNzM=",
        name: "github-readme-stats",
        full_name: "anuraghazra/github-readme-stats",
        private: false,
        owner: {
          login: "anuraghazra",
          id: 35374649,
          node_id: "MDQ6VXNlcjM1Mzc0NjQ5",
          avatar_url: "https://avatars.githubusercontent.com/u/35374649?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/anuraghazra",
          html_url: "https://github.com/anuraghazra",
          followers_url: "https://api.github.com/users/anuraghazra/followers",
          following_url:
            "https://api.github.com/users/anuraghazra/following{/other_user}",
          gists_url: "https://api.github.com/users/anuraghazra/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/anuraghazra/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/anuraghazra/subscriptions",
          organizations_url: "https://api.github.com/users/anuraghazra/orgs",
          repos_url: "https://api.github.com/users/anuraghazra/repos",
          events_url:
            "https://api.github.com/users/anuraghazra/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/anuraghazra/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/anuraghazra/github-readme-stats",
        description:
          ":zap: Dynamically generated stats for your github readmes",
        fork: false,
        url: "https://api.github.com/repos/anuraghazra/github-readme-stats",
        forks_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/forks",
        keys_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/teams",
        hooks_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/hooks",
        issue_events_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/events",
        assignees_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/tags",
        blobs_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/languages",
        stargazers_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/stargazers",
        contributors_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/contributors",
        subscribers_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/subscribers",
        subscription_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/subscription",
        commits_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/merges",
        archive_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/downloads",
        issues_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/labels{/name}",
        releases_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/anuraghazra/github-readme-stats/deployments",
        created_at: "2020-07-09T10:34:22Z",
        updated_at: "2025-07-11T06:52:34Z",
        pushed_at: "2025-07-09T15:23:44Z",
        git_url: "git://github.com/anuraghazra/github-readme-stats.git",
        ssh_url: "git@github.com:anuraghazra/github-readme-stats.git",
        clone_url: "https://github.com/anuraghazra/github-readme-stats.git",
        svn_url: "https://github.com/anuraghazra/github-readme-stats",
        homepage: "https://github-readme-stats.vercel.app",
        size: 5661,
        stargazers_count: 74295,
        watchers_count: 74295,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 25270,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 421,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "dynamic",
          "hacktoberfest",
          "profile-readme",
          "readme-generator",
          "readme-stats",
          "serverless",
        ],
        visibility: "public",
        forks: 25270,
        open_issues: 421,
        watchers: 74295,
        default_branch: "master",
        score: 1,
        order: 18,
      },
      {
        id: 382496361,
        node_id: "MDEwOlJlcG9zaXRvcnkzODI0OTYzNjE=",
        name: "uptime-kuma",
        full_name: "louislam/uptime-kuma",
        private: false,
        owner: {
          login: "louislam",
          id: 1336778,
          node_id: "MDQ6VXNlcjEzMzY3Nzg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1336778?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/louislam",
          html_url: "https://github.com/louislam",
          followers_url: "https://api.github.com/users/louislam/followers",
          following_url:
            "https://api.github.com/users/louislam/following{/other_user}",
          gists_url: "https://api.github.com/users/louislam/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/louislam/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/louislam/subscriptions",
          organizations_url: "https://api.github.com/users/louislam/orgs",
          repos_url: "https://api.github.com/users/louislam/repos",
          events_url: "https://api.github.com/users/louislam/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/louislam/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/louislam/uptime-kuma",
        description: "A fancy self-hosted monitoring tool",
        fork: false,
        url: "https://api.github.com/repos/louislam/uptime-kuma",
        forks_url: "https://api.github.com/repos/louislam/uptime-kuma/forks",
        keys_url:
          "https://api.github.com/repos/louislam/uptime-kuma/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/louislam/uptime-kuma/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/louislam/uptime-kuma/teams",
        hooks_url: "https://api.github.com/repos/louislam/uptime-kuma/hooks",
        issue_events_url:
          "https://api.github.com/repos/louislam/uptime-kuma/issues/events{/number}",
        events_url: "https://api.github.com/repos/louislam/uptime-kuma/events",
        assignees_url:
          "https://api.github.com/repos/louislam/uptime-kuma/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/louislam/uptime-kuma/branches{/branch}",
        tags_url: "https://api.github.com/repos/louislam/uptime-kuma/tags",
        blobs_url:
          "https://api.github.com/repos/louislam/uptime-kuma/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/louislam/uptime-kuma/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/louislam/uptime-kuma/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/louislam/uptime-kuma/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/louislam/uptime-kuma/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/louislam/uptime-kuma/languages",
        stargazers_url:
          "https://api.github.com/repos/louislam/uptime-kuma/stargazers",
        contributors_url:
          "https://api.github.com/repos/louislam/uptime-kuma/contributors",
        subscribers_url:
          "https://api.github.com/repos/louislam/uptime-kuma/subscribers",
        subscription_url:
          "https://api.github.com/repos/louislam/uptime-kuma/subscription",
        commits_url:
          "https://api.github.com/repos/louislam/uptime-kuma/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/louislam/uptime-kuma/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/louislam/uptime-kuma/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/louislam/uptime-kuma/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/louislam/uptime-kuma/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/louislam/uptime-kuma/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/louislam/uptime-kuma/merges",
        archive_url:
          "https://api.github.com/repos/louislam/uptime-kuma/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/louislam/uptime-kuma/downloads",
        issues_url:
          "https://api.github.com/repos/louislam/uptime-kuma/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/louislam/uptime-kuma/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/louislam/uptime-kuma/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/louislam/uptime-kuma/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/louislam/uptime-kuma/labels{/name}",
        releases_url:
          "https://api.github.com/repos/louislam/uptime-kuma/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/louislam/uptime-kuma/deployments",
        created_at: "2021-07-03T01:02:42Z",
        updated_at: "2025-07-11T09:30:05Z",
        pushed_at: "2025-07-09T14:22:55Z",
        git_url: "git://github.com/louislam/uptime-kuma.git",
        ssh_url: "git@github.com:louislam/uptime-kuma.git",
        clone_url: "https://github.com/louislam/uptime-kuma.git",
        svn_url: "https://github.com/louislam/uptime-kuma",
        homepage: "https://uptime.kuma.pet",
        size: 29552,
        stargazers_count: 71753,
        watchers_count: 71753,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 6351,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 779,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "docker",
          "monitor",
          "monitoring",
          "responsive",
          "self-hosted",
          "selfhosted",
          "single-page-app",
          "socket-io",
          "uptime",
          "uptime-monitoring",
          "webapp",
          "websocket",
        ],
        visibility: "public",
        forks: 6351,
        open_issues: 779,
        watchers: 71753,
        default_branch: "master",
        score: 1,
        order: 19,
      },
      {
        id: 1861458,
        node_id: "MDEwOlJlcG9zaXRvcnkxODYxNDU4",
        name: "reveal.js",
        full_name: "hakimel/reveal.js",
        private: false,
        owner: {
          login: "hakimel",
          id: 629429,
          node_id: "MDQ6VXNlcjYyOTQyOQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/629429?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/hakimel",
          html_url: "https://github.com/hakimel",
          followers_url: "https://api.github.com/users/hakimel/followers",
          following_url:
            "https://api.github.com/users/hakimel/following{/other_user}",
          gists_url: "https://api.github.com/users/hakimel/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/hakimel/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/hakimel/subscriptions",
          organizations_url: "https://api.github.com/users/hakimel/orgs",
          repos_url: "https://api.github.com/users/hakimel/repos",
          events_url: "https://api.github.com/users/hakimel/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/hakimel/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/hakimel/reveal.js",
        description: "The HTML Presentation Framework",
        fork: false,
        url: "https://api.github.com/repos/hakimel/reveal.js",
        forks_url: "https://api.github.com/repos/hakimel/reveal.js/forks",
        keys_url:
          "https://api.github.com/repos/hakimel/reveal.js/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/hakimel/reveal.js/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/hakimel/reveal.js/teams",
        hooks_url: "https://api.github.com/repos/hakimel/reveal.js/hooks",
        issue_events_url:
          "https://api.github.com/repos/hakimel/reveal.js/issues/events{/number}",
        events_url: "https://api.github.com/repos/hakimel/reveal.js/events",
        assignees_url:
          "https://api.github.com/repos/hakimel/reveal.js/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/hakimel/reveal.js/branches{/branch}",
        tags_url: "https://api.github.com/repos/hakimel/reveal.js/tags",
        blobs_url:
          "https://api.github.com/repos/hakimel/reveal.js/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/hakimel/reveal.js/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/hakimel/reveal.js/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/hakimel/reveal.js/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/hakimel/reveal.js/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/hakimel/reveal.js/languages",
        stargazers_url:
          "https://api.github.com/repos/hakimel/reveal.js/stargazers",
        contributors_url:
          "https://api.github.com/repos/hakimel/reveal.js/contributors",
        subscribers_url:
          "https://api.github.com/repos/hakimel/reveal.js/subscribers",
        subscription_url:
          "https://api.github.com/repos/hakimel/reveal.js/subscription",
        commits_url:
          "https://api.github.com/repos/hakimel/reveal.js/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/hakimel/reveal.js/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/hakimel/reveal.js/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/hakimel/reveal.js/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/hakimel/reveal.js/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/hakimel/reveal.js/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/hakimel/reveal.js/merges",
        archive_url:
          "https://api.github.com/repos/hakimel/reveal.js/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/hakimel/reveal.js/downloads",
        issues_url:
          "https://api.github.com/repos/hakimel/reveal.js/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/hakimel/reveal.js/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/hakimel/reveal.js/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/hakimel/reveal.js/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/hakimel/reveal.js/labels{/name}",
        releases_url:
          "https://api.github.com/repos/hakimel/reveal.js/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/hakimel/reveal.js/deployments",
        created_at: "2011-06-07T18:54:22Z",
        updated_at: "2025-07-11T08:13:52Z",
        pushed_at: "2025-06-08T20:07:02Z",
        git_url: "git://github.com/hakimel/reveal.js.git",
        ssh_url: "git@github.com:hakimel/reveal.js.git",
        clone_url: "https://github.com/hakimel/reveal.js.git",
        svn_url: "https://github.com/hakimel/reveal.js",
        homepage: "https://revealjs.com",
        size: 28238,
        stargazers_count: 69122,
        watchers_count: 69122,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 16737,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 855,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["presentations", "slides", "slideshow"],
        visibility: "public",
        forks: 16737,
        open_issues: 855,
        watchers: 69122,
        default_branch: "master",
        score: 1,
        order: 20,
      },
      {
        id: 237159,
        node_id: "MDEwOlJlcG9zaXRvcnkyMzcxNTk=",
        name: "express",
        full_name: "expressjs/express",
        private: false,
        owner: {
          login: "expressjs",
          id: 5658226,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjU2NTgyMjY=",
          avatar_url: "https://avatars.githubusercontent.com/u/5658226?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/expressjs",
          html_url: "https://github.com/expressjs",
          followers_url: "https://api.github.com/users/expressjs/followers",
          following_url:
            "https://api.github.com/users/expressjs/following{/other_user}",
          gists_url: "https://api.github.com/users/expressjs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/expressjs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/expressjs/subscriptions",
          organizations_url: "https://api.github.com/users/expressjs/orgs",
          repos_url: "https://api.github.com/users/expressjs/repos",
          events_url: "https://api.github.com/users/expressjs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/expressjs/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/expressjs/express",
        description: "Fast, unopinionated, minimalist web framework for node.",
        fork: false,
        url: "https://api.github.com/repos/expressjs/express",
        forks_url: "https://api.github.com/repos/expressjs/express/forks",
        keys_url:
          "https://api.github.com/repos/expressjs/express/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/expressjs/express/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/expressjs/express/teams",
        hooks_url: "https://api.github.com/repos/expressjs/express/hooks",
        issue_events_url:
          "https://api.github.com/repos/expressjs/express/issues/events{/number}",
        events_url: "https://api.github.com/repos/expressjs/express/events",
        assignees_url:
          "https://api.github.com/repos/expressjs/express/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/expressjs/express/branches{/branch}",
        tags_url: "https://api.github.com/repos/expressjs/express/tags",
        blobs_url:
          "https://api.github.com/repos/expressjs/express/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/expressjs/express/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/expressjs/express/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/expressjs/express/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/expressjs/express/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/expressjs/express/languages",
        stargazers_url:
          "https://api.github.com/repos/expressjs/express/stargazers",
        contributors_url:
          "https://api.github.com/repos/expressjs/express/contributors",
        subscribers_url:
          "https://api.github.com/repos/expressjs/express/subscribers",
        subscription_url:
          "https://api.github.com/repos/expressjs/express/subscription",
        commits_url:
          "https://api.github.com/repos/expressjs/express/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/expressjs/express/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/expressjs/express/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/expressjs/express/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/expressjs/express/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/expressjs/express/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/expressjs/express/merges",
        archive_url:
          "https://api.github.com/repos/expressjs/express/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/expressjs/express/downloads",
        issues_url:
          "https://api.github.com/repos/expressjs/express/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/expressjs/express/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/expressjs/express/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/expressjs/express/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/expressjs/express/labels{/name}",
        releases_url:
          "https://api.github.com/repos/expressjs/express/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/expressjs/express/deployments",
        created_at: "2009-06-26T18:56:01Z",
        updated_at: "2025-07-11T09:03:27Z",
        pushed_at: "2025-07-09T08:27:48Z",
        git_url: "git://github.com/expressjs/express.git",
        ssh_url: "git@github.com:expressjs/express.git",
        clone_url: "https://github.com/expressjs/express.git",
        svn_url: "https://github.com/expressjs/express",
        homepage: "https://expressjs.com",
        size: 9610,
        stargazers_count: 67321,
        watchers_count: 67321,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 19379,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 201,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["express", "javascript", "nodejs", "server"],
        visibility: "public",
        forks: 19379,
        open_issues: 201,
        watchers: 67321,
        default_branch: "master",
        score: 1,
        order: 21,
      },
      {
        id: 8843683,
        node_id: "MDEwOlJlcG9zaXRvcnk4ODQzNjgz",
        name: "Chart.js",
        full_name: "chartjs/Chart.js",
        private: false,
        owner: {
          login: "chartjs",
          id: 10342521,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEwMzQyNTIx",
          avatar_url: "https://avatars.githubusercontent.com/u/10342521?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/chartjs",
          html_url: "https://github.com/chartjs",
          followers_url: "https://api.github.com/users/chartjs/followers",
          following_url:
            "https://api.github.com/users/chartjs/following{/other_user}",
          gists_url: "https://api.github.com/users/chartjs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/chartjs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/chartjs/subscriptions",
          organizations_url: "https://api.github.com/users/chartjs/orgs",
          repos_url: "https://api.github.com/users/chartjs/repos",
          events_url: "https://api.github.com/users/chartjs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/chartjs/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/chartjs/Chart.js",
        description: "Simple HTML5 Charts using the <canvas> tag",
        fork: false,
        url: "https://api.github.com/repos/chartjs/Chart.js",
        forks_url: "https://api.github.com/repos/chartjs/Chart.js/forks",
        keys_url: "https://api.github.com/repos/chartjs/Chart.js/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/chartjs/Chart.js/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/chartjs/Chart.js/teams",
        hooks_url: "https://api.github.com/repos/chartjs/Chart.js/hooks",
        issue_events_url:
          "https://api.github.com/repos/chartjs/Chart.js/issues/events{/number}",
        events_url: "https://api.github.com/repos/chartjs/Chart.js/events",
        assignees_url:
          "https://api.github.com/repos/chartjs/Chart.js/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/chartjs/Chart.js/branches{/branch}",
        tags_url: "https://api.github.com/repos/chartjs/Chart.js/tags",
        blobs_url:
          "https://api.github.com/repos/chartjs/Chart.js/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/chartjs/Chart.js/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/chartjs/Chart.js/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/chartjs/Chart.js/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/chartjs/Chart.js/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/chartjs/Chart.js/languages",
        stargazers_url:
          "https://api.github.com/repos/chartjs/Chart.js/stargazers",
        contributors_url:
          "https://api.github.com/repos/chartjs/Chart.js/contributors",
        subscribers_url:
          "https://api.github.com/repos/chartjs/Chart.js/subscribers",
        subscription_url:
          "https://api.github.com/repos/chartjs/Chart.js/subscription",
        commits_url:
          "https://api.github.com/repos/chartjs/Chart.js/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/chartjs/Chart.js/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/chartjs/Chart.js/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/chartjs/Chart.js/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/chartjs/Chart.js/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/chartjs/Chart.js/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/chartjs/Chart.js/merges",
        archive_url:
          "https://api.github.com/repos/chartjs/Chart.js/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/chartjs/Chart.js/downloads",
        issues_url:
          "https://api.github.com/repos/chartjs/Chart.js/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/chartjs/Chart.js/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/chartjs/Chart.js/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/chartjs/Chart.js/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/chartjs/Chart.js/labels{/name}",
        releases_url:
          "https://api.github.com/repos/chartjs/Chart.js/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/chartjs/Chart.js/deployments",
        created_at: "2013-03-17T23:56:36Z",
        updated_at: "2025-07-11T09:17:27Z",
        pushed_at: "2025-06-14T20:39:34Z",
        git_url: "git://github.com/chartjs/Chart.js.git",
        ssh_url: "git@github.com:chartjs/Chart.js.git",
        clone_url: "https://github.com/chartjs/Chart.js.git",
        svn_url: "https://github.com/chartjs/Chart.js",
        homepage: "https://www.chartjs.org/",
        size: 43451,
        stargazers_count: 66213,
        watchers_count: 66213,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 11954,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 483,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "canvas",
          "chart",
          "graph",
          "html5",
          "html5-charts",
          "javascript",
        ],
        visibility: "public",
        forks: 11954,
        open_issues: 483,
        watchers: 66213,
        default_branch: "master",
        score: 1,
        order: 22,
      },
      {
        id: 3678731,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjc4NzMx",
        name: "webpack",
        full_name: "webpack/webpack",
        private: false,
        owner: {
          login: "webpack",
          id: 2105791,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjIxMDU3OTE=",
          avatar_url: "https://avatars.githubusercontent.com/u/2105791?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/webpack",
          html_url: "https://github.com/webpack",
          followers_url: "https://api.github.com/users/webpack/followers",
          following_url:
            "https://api.github.com/users/webpack/following{/other_user}",
          gists_url: "https://api.github.com/users/webpack/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/webpack/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/webpack/subscriptions",
          organizations_url: "https://api.github.com/users/webpack/orgs",
          repos_url: "https://api.github.com/users/webpack/repos",
          events_url: "https://api.github.com/users/webpack/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/webpack/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/webpack/webpack",
        description:
          'A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.',
        fork: false,
        url: "https://api.github.com/repos/webpack/webpack",
        forks_url: "https://api.github.com/repos/webpack/webpack/forks",
        keys_url: "https://api.github.com/repos/webpack/webpack/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/webpack/webpack/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/webpack/webpack/teams",
        hooks_url: "https://api.github.com/repos/webpack/webpack/hooks",
        issue_events_url:
          "https://api.github.com/repos/webpack/webpack/issues/events{/number}",
        events_url: "https://api.github.com/repos/webpack/webpack/events",
        assignees_url:
          "https://api.github.com/repos/webpack/webpack/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/webpack/webpack/branches{/branch}",
        tags_url: "https://api.github.com/repos/webpack/webpack/tags",
        blobs_url:
          "https://api.github.com/repos/webpack/webpack/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/webpack/webpack/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/webpack/webpack/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/webpack/webpack/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/webpack/webpack/statuses/{sha}",
        languages_url: "https://api.github.com/repos/webpack/webpack/languages",
        stargazers_url:
          "https://api.github.com/repos/webpack/webpack/stargazers",
        contributors_url:
          "https://api.github.com/repos/webpack/webpack/contributors",
        subscribers_url:
          "https://api.github.com/repos/webpack/webpack/subscribers",
        subscription_url:
          "https://api.github.com/repos/webpack/webpack/subscription",
        commits_url:
          "https://api.github.com/repos/webpack/webpack/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/webpack/webpack/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/webpack/webpack/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/webpack/webpack/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/webpack/webpack/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/webpack/webpack/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/webpack/webpack/merges",
        archive_url:
          "https://api.github.com/repos/webpack/webpack/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/webpack/webpack/downloads",
        issues_url:
          "https://api.github.com/repos/webpack/webpack/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/webpack/webpack/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/webpack/webpack/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/webpack/webpack/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/webpack/webpack/labels{/name}",
        releases_url:
          "https://api.github.com/repos/webpack/webpack/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/webpack/webpack/deployments",
        created_at: "2012-03-10T10:08:14Z",
        updated_at: "2025-07-11T06:18:51Z",
        pushed_at: "2025-07-11T02:48:47Z",
        git_url: "git://github.com/webpack/webpack.git",
        ssh_url: "git@github.com:webpack/webpack.git",
        clone_url: "https://github.com/webpack/webpack.git",
        svn_url: "https://github.com/webpack/webpack",
        homepage: "https://webpack.js.org",
        size: 70166,
        stargazers_count: 65427,
        watchers_count: 65427,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 9078,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 235,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "amd",
          "build-tool",
          "commonjs",
          "compiler",
          "es2015",
          "es6",
          "esm",
          "javascript",
          "javascript-compiler",
          "javascript-modules",
          "loaders",
          "module-bundler",
          "plugins",
          "web",
          "web-performance",
          "webpack",
        ],
        visibility: "public",
        forks: 9078,
        open_issues: 235,
        watchers: 65427,
        default_branch: "main",
        score: 1,
        order: 23,
      },
      {
        id: 147350463,
        node_id: "MDEwOlJlcG9zaXRvcnkxNDczNTA0NjM=",
        name: "33-js-concepts",
        full_name: "leonardomso/33-js-concepts",
        private: false,
        owner: {
          login: "leonardomso",
          id: 8030067,
          node_id: "MDQ6VXNlcjgwMzAwNjc=",
          avatar_url: "https://avatars.githubusercontent.com/u/8030067?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/leonardomso",
          html_url: "https://github.com/leonardomso",
          followers_url: "https://api.github.com/users/leonardomso/followers",
          following_url:
            "https://api.github.com/users/leonardomso/following{/other_user}",
          gists_url: "https://api.github.com/users/leonardomso/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/leonardomso/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/leonardomso/subscriptions",
          organizations_url: "https://api.github.com/users/leonardomso/orgs",
          repos_url: "https://api.github.com/users/leonardomso/repos",
          events_url:
            "https://api.github.com/users/leonardomso/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/leonardomso/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/leonardomso/33-js-concepts",
        description: "📜 33 JavaScript concepts every developer should know.",
        fork: false,
        url: "https://api.github.com/repos/leonardomso/33-js-concepts",
        forks_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/forks",
        keys_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/teams",
        hooks_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/hooks",
        issue_events_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/events",
        assignees_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/tags",
        blobs_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/languages",
        stargazers_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/stargazers",
        contributors_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/contributors",
        subscribers_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/subscribers",
        subscription_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/subscription",
        commits_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/merges",
        archive_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/downloads",
        issues_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/labels{/name}",
        releases_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/leonardomso/33-js-concepts/deployments",
        created_at: "2018-09-04T13:27:04Z",
        updated_at: "2025-07-11T05:10:51Z",
        pushed_at: "2025-04-27T17:12:57Z",
        git_url: "git://github.com/leonardomso/33-js-concepts.git",
        ssh_url: "git@github.com:leonardomso/33-js-concepts.git",
        clone_url: "https://github.com/leonardomso/33-js-concepts.git",
        svn_url: "https://github.com/leonardomso/33-js-concepts",
        homepage: "",
        size: 1260,
        stargazers_count: 65340,
        watchers_count: 65340,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 9095,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 82,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "angular",
          "concepts",
          "es6",
          "es6-javascript",
          "hacktoberfest",
          "javascript",
          "javascript-closures",
          "javascript-engines",
          "javascript-programming",
          "nodejs",
          "primitive-types",
          "programming",
          "react",
        ],
        visibility: "public",
        forks: 9095,
        open_issues: 82,
        watchers: 65340,
        default_branch: "master",
        score: 1,
        order: 24,
      },
    ],
  },
];

const mockAdd = [
  {
    key: "12312312dasasdqwe",
    data: [
      {
        id: 1334369,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzM0MzY5",
        name: "resume.github.com",
        full_name: "resume/resume.github.com",
        private: false,
        owner: {
          login: "resume",
          id: 602612,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMjYxMg==",
          avatar_url: "https://avatars.githubusercontent.com/u/602612?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/resume",
          html_url: "https://github.com/resume",
          followers_url: "https://api.github.com/users/resume/followers",
          following_url:
            "https://api.github.com/users/resume/following{/other_user}",
          gists_url: "https://api.github.com/users/resume/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/resume/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/resume/subscriptions",
          organizations_url: "https://api.github.com/users/resume/orgs",
          repos_url: "https://api.github.com/users/resume/repos",
          events_url: "https://api.github.com/users/resume/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/resume/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/resume/resume.github.com",
        description: "Resumes generated using the GitHub informations",
        fork: false,
        url: "https://api.github.com/repos/resume/resume.github.com",
        forks_url:
          "https://api.github.com/repos/resume/resume.github.com/forks",
        keys_url:
          "https://api.github.com/repos/resume/resume.github.com/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/resume/resume.github.com/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/resume/resume.github.com/teams",
        hooks_url:
          "https://api.github.com/repos/resume/resume.github.com/hooks",
        issue_events_url:
          "https://api.github.com/repos/resume/resume.github.com/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/resume/resume.github.com/events",
        assignees_url:
          "https://api.github.com/repos/resume/resume.github.com/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/resume/resume.github.com/branches{/branch}",
        tags_url: "https://api.github.com/repos/resume/resume.github.com/tags",
        blobs_url:
          "https://api.github.com/repos/resume/resume.github.com/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/resume/resume.github.com/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/resume/resume.github.com/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/resume/resume.github.com/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/resume/resume.github.com/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/resume/resume.github.com/languages",
        stargazers_url:
          "https://api.github.com/repos/resume/resume.github.com/stargazers",
        contributors_url:
          "https://api.github.com/repos/resume/resume.github.com/contributors",
        subscribers_url:
          "https://api.github.com/repos/resume/resume.github.com/subscribers",
        subscription_url:
          "https://api.github.com/repos/resume/resume.github.com/subscription",
        commits_url:
          "https://api.github.com/repos/resume/resume.github.com/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/resume/resume.github.com/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/resume/resume.github.com/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/resume/resume.github.com/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/resume/resume.github.com/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/resume/resume.github.com/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/resume/resume.github.com/merges",
        archive_url:
          "https://api.github.com/repos/resume/resume.github.com/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/resume/resume.github.com/downloads",
        issues_url:
          "https://api.github.com/repos/resume/resume.github.com/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/resume/resume.github.com/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/resume/resume.github.com/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/resume/resume.github.com/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/resume/resume.github.com/labels{/name}",
        releases_url:
          "https://api.github.com/repos/resume/resume.github.com/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/resume/resume.github.com/deployments",
        created_at: "2011-02-06T13:39:55Z",
        updated_at: "2025-07-11T07:45:47Z",
        pushed_at: "2023-02-15T06:38:51Z",
        git_url: "git://github.com/resume/resume.github.com.git",
        ssh_url: "git@github.com:resume/resume.github.com.git",
        clone_url: "https://github.com/resume/resume.github.com.git",
        svn_url: "https://github.com/resume/resume.github.com",
        homepage: "https://resume.github.com",
        size: 411,
        stargazers_count: 62548,
        watchers_count: 62548,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 1356,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 66,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1356,
        open_issues: 66,
        watchers: 62548,
        default_branch: "master",
        score: 1,
        order: 25,
      },
      {
        id: 53809090,
        node_id: "MDEwOlJlcG9zaXRvcnk1MzgwOTA5MA==",
        name: "anime",
        full_name: "juliangarnier/anime",
        private: false,
        owner: {
          login: "juliangarnier",
          id: 1268691,
          node_id: "MDQ6VXNlcjEyNjg2OTE=",
          avatar_url: "https://avatars.githubusercontent.com/u/1268691?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/juliangarnier",
          html_url: "https://github.com/juliangarnier",
          followers_url: "https://api.github.com/users/juliangarnier/followers",
          following_url:
            "https://api.github.com/users/juliangarnier/following{/other_user}",
          gists_url:
            "https://api.github.com/users/juliangarnier/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/juliangarnier/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/juliangarnier/subscriptions",
          organizations_url: "https://api.github.com/users/juliangarnier/orgs",
          repos_url: "https://api.github.com/users/juliangarnier/repos",
          events_url:
            "https://api.github.com/users/juliangarnier/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/juliangarnier/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/juliangarnier/anime",
        description: "JavaScript animation engine",
        fork: false,
        url: "https://api.github.com/repos/juliangarnier/anime",
        forks_url: "https://api.github.com/repos/juliangarnier/anime/forks",
        keys_url:
          "https://api.github.com/repos/juliangarnier/anime/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/juliangarnier/anime/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/juliangarnier/anime/teams",
        hooks_url: "https://api.github.com/repos/juliangarnier/anime/hooks",
        issue_events_url:
          "https://api.github.com/repos/juliangarnier/anime/issues/events{/number}",
        events_url: "https://api.github.com/repos/juliangarnier/anime/events",
        assignees_url:
          "https://api.github.com/repos/juliangarnier/anime/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/juliangarnier/anime/branches{/branch}",
        tags_url: "https://api.github.com/repos/juliangarnier/anime/tags",
        blobs_url:
          "https://api.github.com/repos/juliangarnier/anime/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/juliangarnier/anime/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/juliangarnier/anime/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/juliangarnier/anime/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/juliangarnier/anime/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/juliangarnier/anime/languages",
        stargazers_url:
          "https://api.github.com/repos/juliangarnier/anime/stargazers",
        contributors_url:
          "https://api.github.com/repos/juliangarnier/anime/contributors",
        subscribers_url:
          "https://api.github.com/repos/juliangarnier/anime/subscribers",
        subscription_url:
          "https://api.github.com/repos/juliangarnier/anime/subscription",
        commits_url:
          "https://api.github.com/repos/juliangarnier/anime/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/juliangarnier/anime/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/juliangarnier/anime/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/juliangarnier/anime/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/juliangarnier/anime/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/juliangarnier/anime/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/juliangarnier/anime/merges",
        archive_url:
          "https://api.github.com/repos/juliangarnier/anime/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/juliangarnier/anime/downloads",
        issues_url:
          "https://api.github.com/repos/juliangarnier/anime/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/juliangarnier/anime/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/juliangarnier/anime/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/juliangarnier/anime/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/juliangarnier/anime/labels{/name}",
        releases_url:
          "https://api.github.com/repos/juliangarnier/anime/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/juliangarnier/anime/deployments",
        created_at: "2016-03-13T21:37:45Z",
        updated_at: "2025-07-11T08:28:43Z",
        pushed_at: "2025-07-08T10:11:14Z",
        git_url: "git://github.com/juliangarnier/anime.git",
        ssh_url: "git@github.com:juliangarnier/anime.git",
        clone_url: "https://github.com/juliangarnier/anime.git",
        svn_url: "https://github.com/juliangarnier/anime",
        homepage: "https://animejs.com",
        size: 67367,
        stargazers_count: 62195,
        watchers_count: 62195,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 4156,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 102,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "animation",
          "anime",
          "canvas",
          "css",
          "javascript",
          "javascript-library",
          "svg",
        ],
        visibility: "public",
        forks: 4156,
        open_issues: 102,
        watchers: 62195,
        default_branch: "master",
        score: 1,
        order: 26,
      },
      {
        id: 3955647,
        node_id: "MDEwOlJlcG9zaXRvcnkzOTU1NjQ3",
        name: "lodash",
        full_name: "lodash/lodash",
        private: false,
        owner: {
          login: "lodash",
          id: 2565403,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
          avatar_url: "https://avatars.githubusercontent.com/u/2565403?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lodash",
          html_url: "https://github.com/lodash",
          followers_url: "https://api.github.com/users/lodash/followers",
          following_url:
            "https://api.github.com/users/lodash/following{/other_user}",
          gists_url: "https://api.github.com/users/lodash/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lodash/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lodash/subscriptions",
          organizations_url: "https://api.github.com/users/lodash/orgs",
          repos_url: "https://api.github.com/users/lodash/repos",
          events_url: "https://api.github.com/users/lodash/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lodash/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/lodash/lodash",
        description:
          "A modern JavaScript utility library delivering modularity, performance, & extras.",
        fork: false,
        url: "https://api.github.com/repos/lodash/lodash",
        forks_url: "https://api.github.com/repos/lodash/lodash/forks",
        keys_url: "https://api.github.com/repos/lodash/lodash/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/lodash/lodash/teams",
        hooks_url: "https://api.github.com/repos/lodash/lodash/hooks",
        issue_events_url:
          "https://api.github.com/repos/lodash/lodash/issues/events{/number}",
        events_url: "https://api.github.com/repos/lodash/lodash/events",
        assignees_url:
          "https://api.github.com/repos/lodash/lodash/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/lodash/lodash/branches{/branch}",
        tags_url: "https://api.github.com/repos/lodash/lodash/tags",
        blobs_url: "https://api.github.com/repos/lodash/lodash/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/lodash/lodash/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/lodash/lodash/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/lodash/lodash/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/lodash/lodash/statuses/{sha}",
        languages_url: "https://api.github.com/repos/lodash/lodash/languages",
        stargazers_url: "https://api.github.com/repos/lodash/lodash/stargazers",
        contributors_url:
          "https://api.github.com/repos/lodash/lodash/contributors",
        subscribers_url:
          "https://api.github.com/repos/lodash/lodash/subscribers",
        subscription_url:
          "https://api.github.com/repos/lodash/lodash/subscription",
        commits_url: "https://api.github.com/repos/lodash/lodash/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/lodash/lodash/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/lodash/lodash/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/lodash/lodash/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/lodash/lodash/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/lodash/lodash/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/lodash/lodash/merges",
        archive_url:
          "https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/lodash/lodash/downloads",
        issues_url:
          "https://api.github.com/repos/lodash/lodash/issues{/number}",
        pulls_url: "https://api.github.com/repos/lodash/lodash/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/lodash/lodash/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/lodash/lodash/labels{/name}",
        releases_url:
          "https://api.github.com/repos/lodash/lodash/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/lodash/lodash/deployments",
        created_at: "2012-04-07T04:11:46Z",
        updated_at: "2025-07-11T06:14:25Z",
        pushed_at: "2024-12-12T22:27:04Z",
        git_url: "git://github.com/lodash/lodash.git",
        ssh_url: "git@github.com:lodash/lodash.git",
        clone_url: "https://github.com/lodash/lodash.git",
        svn_url: "https://github.com/lodash/lodash",
        homepage: "https://lodash.com/",
        size: 49142,
        stargazers_count: 60720,
        watchers_count: 60720,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 7064,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 114,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["javascript", "lodash", "modules", "utilities"],
        visibility: "public",
        forks: 7064,
        open_issues: 114,
        watchers: 60720,
        default_branch: "main",
        score: 1,
        order: 27,
      },
      {
        id: 3228505,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjI4NTA1",
        name: "atom",
        full_name: "atom/atom",
        private: false,
        owner: {
          login: "atom",
          id: 1089146,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEwODkxNDY=",
          avatar_url: "https://avatars.githubusercontent.com/u/1089146?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/atom",
          html_url: "https://github.com/atom",
          followers_url: "https://api.github.com/users/atom/followers",
          following_url:
            "https://api.github.com/users/atom/following{/other_user}",
          gists_url: "https://api.github.com/users/atom/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/atom/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/atom/subscriptions",
          organizations_url: "https://api.github.com/users/atom/orgs",
          repos_url: "https://api.github.com/users/atom/repos",
          events_url: "https://api.github.com/users/atom/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/atom/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/atom/atom",
        description: ":atom: The hackable text editor",
        fork: false,
        url: "https://api.github.com/repos/atom/atom",
        forks_url: "https://api.github.com/repos/atom/atom/forks",
        keys_url: "https://api.github.com/repos/atom/atom/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/atom/atom/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/atom/atom/teams",
        hooks_url: "https://api.github.com/repos/atom/atom/hooks",
        issue_events_url:
          "https://api.github.com/repos/atom/atom/issues/events{/number}",
        events_url: "https://api.github.com/repos/atom/atom/events",
        assignees_url:
          "https://api.github.com/repos/atom/atom/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/atom/atom/branches{/branch}",
        tags_url: "https://api.github.com/repos/atom/atom/tags",
        blobs_url: "https://api.github.com/repos/atom/atom/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/atom/atom/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/atom/atom/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/atom/atom/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/atom/atom/statuses/{sha}",
        languages_url: "https://api.github.com/repos/atom/atom/languages",
        stargazers_url: "https://api.github.com/repos/atom/atom/stargazers",
        contributors_url: "https://api.github.com/repos/atom/atom/contributors",
        subscribers_url: "https://api.github.com/repos/atom/atom/subscribers",
        subscription_url: "https://api.github.com/repos/atom/atom/subscription",
        commits_url: "https://api.github.com/repos/atom/atom/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/atom/atom/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/atom/atom/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/atom/atom/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/atom/atom/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/atom/atom/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/atom/atom/merges",
        archive_url:
          "https://api.github.com/repos/atom/atom/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/atom/atom/downloads",
        issues_url: "https://api.github.com/repos/atom/atom/issues{/number}",
        pulls_url: "https://api.github.com/repos/atom/atom/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/atom/atom/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/atom/atom/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/atom/atom/labels{/name}",
        releases_url: "https://api.github.com/repos/atom/atom/releases{/id}",
        deployments_url: "https://api.github.com/repos/atom/atom/deployments",
        created_at: "2012-01-20T18:18:21Z",
        updated_at: "2025-07-11T07:44:05Z",
        pushed_at: "2023-01-03T10:49:48Z",
        git_url: "git://github.com/atom/atom.git",
        ssh_url: "git@github.com:atom/atom.git",
        clone_url: "https://github.com/atom/atom.git",
        svn_url: "https://github.com/atom/atom",
        homepage: "https://atom.io",
        size: 330585,
        stargazers_count: 60545,
        watchers_count: 60545,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 17320,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 993,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "atom",
          "editor",
          "electron",
          "javascript",
          "linux",
          "macos",
          "windows",
        ],
        visibility: "public",
        forks: 17320,
        open_issues: 993,
        watchers: 60545,
        default_branch: "master",
        score: 1,
        order: 28,
      },
      {
        id: 4311796,
        node_id: "MDEwOlJlcG9zaXRvcnk0MzExNzk2",
        name: "markdown-here",
        full_name: "adam-p/markdown-here",
        private: false,
        owner: {
          login: "adam-p",
          id: 425687,
          node_id: "MDQ6VXNlcjQyNTY4Nw==",
          avatar_url: "https://avatars.githubusercontent.com/u/425687?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/adam-p",
          html_url: "https://github.com/adam-p",
          followers_url: "https://api.github.com/users/adam-p/followers",
          following_url:
            "https://api.github.com/users/adam-p/following{/other_user}",
          gists_url: "https://api.github.com/users/adam-p/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/adam-p/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/adam-p/subscriptions",
          organizations_url: "https://api.github.com/users/adam-p/orgs",
          repos_url: "https://api.github.com/users/adam-p/repos",
          events_url: "https://api.github.com/users/adam-p/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/adam-p/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/adam-p/markdown-here",
        description:
          "Google Chrome, Firefox, and Thunderbird extension that lets you write email in Markdown and render it before sending.",
        fork: false,
        url: "https://api.github.com/repos/adam-p/markdown-here",
        forks_url: "https://api.github.com/repos/adam-p/markdown-here/forks",
        keys_url:
          "https://api.github.com/repos/adam-p/markdown-here/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/adam-p/markdown-here/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/adam-p/markdown-here/teams",
        hooks_url: "https://api.github.com/repos/adam-p/markdown-here/hooks",
        issue_events_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues/events{/number}",
        events_url: "https://api.github.com/repos/adam-p/markdown-here/events",
        assignees_url:
          "https://api.github.com/repos/adam-p/markdown-here/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/adam-p/markdown-here/branches{/branch}",
        tags_url: "https://api.github.com/repos/adam-p/markdown-here/tags",
        blobs_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/adam-p/markdown-here/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/adam-p/markdown-here/languages",
        stargazers_url:
          "https://api.github.com/repos/adam-p/markdown-here/stargazers",
        contributors_url:
          "https://api.github.com/repos/adam-p/markdown-here/contributors",
        subscribers_url:
          "https://api.github.com/repos/adam-p/markdown-here/subscribers",
        subscription_url:
          "https://api.github.com/repos/adam-p/markdown-here/subscription",
        commits_url:
          "https://api.github.com/repos/adam-p/markdown-here/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/adam-p/markdown-here/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/adam-p/markdown-here/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/adam-p/markdown-here/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/adam-p/markdown-here/merges",
        archive_url:
          "https://api.github.com/repos/adam-p/markdown-here/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/adam-p/markdown-here/downloads",
        issues_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/adam-p/markdown-here/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/adam-p/markdown-here/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/adam-p/markdown-here/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/adam-p/markdown-here/labels{/name}",
        releases_url:
          "https://api.github.com/repos/adam-p/markdown-here/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/adam-p/markdown-here/deployments",
        created_at: "2012-05-13T03:27:22Z",
        updated_at: "2025-07-11T07:02:39Z",
        pushed_at: "2025-07-10T01:19:23Z",
        git_url: "git://github.com/adam-p/markdown-here.git",
        ssh_url: "git@github.com:adam-p/markdown-here.git",
        clone_url: "https://github.com/adam-p/markdown-here.git",
        svn_url: "https://github.com/adam-p/markdown-here",
        homepage: "https://markdown-here.com",
        size: 17157,
        stargazers_count: 59944,
        watchers_count: 59944,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 11200,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 319,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 11200,
        open_issues: 319,
        watchers: 59944,
        default_branch: "master",
        score: 1,
        order: 29,
      },
      {
        id: 167174,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjcxNzQ=",
        name: "jquery",
        full_name: "jquery/jquery",
        private: false,
        owner: {
          login: "jquery",
          id: 70142,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjcwMTQy",
          avatar_url: "https://avatars.githubusercontent.com/u/70142?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jquery",
          html_url: "https://github.com/jquery",
          followers_url: "https://api.github.com/users/jquery/followers",
          following_url:
            "https://api.github.com/users/jquery/following{/other_user}",
          gists_url: "https://api.github.com/users/jquery/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jquery/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jquery/subscriptions",
          organizations_url: "https://api.github.com/users/jquery/orgs",
          repos_url: "https://api.github.com/users/jquery/repos",
          events_url: "https://api.github.com/users/jquery/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jquery/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/jquery/jquery",
        description: "jQuery JavaScript Library",
        fork: false,
        url: "https://api.github.com/repos/jquery/jquery",
        forks_url: "https://api.github.com/repos/jquery/jquery/forks",
        keys_url: "https://api.github.com/repos/jquery/jquery/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jquery/jquery/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jquery/jquery/teams",
        hooks_url: "https://api.github.com/repos/jquery/jquery/hooks",
        issue_events_url:
          "https://api.github.com/repos/jquery/jquery/issues/events{/number}",
        events_url: "https://api.github.com/repos/jquery/jquery/events",
        assignees_url:
          "https://api.github.com/repos/jquery/jquery/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jquery/jquery/branches{/branch}",
        tags_url: "https://api.github.com/repos/jquery/jquery/tags",
        blobs_url: "https://api.github.com/repos/jquery/jquery/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jquery/jquery/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jquery/jquery/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/jquery/jquery/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jquery/jquery/statuses/{sha}",
        languages_url: "https://api.github.com/repos/jquery/jquery/languages",
        stargazers_url: "https://api.github.com/repos/jquery/jquery/stargazers",
        contributors_url:
          "https://api.github.com/repos/jquery/jquery/contributors",
        subscribers_url:
          "https://api.github.com/repos/jquery/jquery/subscribers",
        subscription_url:
          "https://api.github.com/repos/jquery/jquery/subscription",
        commits_url: "https://api.github.com/repos/jquery/jquery/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jquery/jquery/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jquery/jquery/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jquery/jquery/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jquery/jquery/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jquery/jquery/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jquery/jquery/merges",
        archive_url:
          "https://api.github.com/repos/jquery/jquery/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/jquery/jquery/downloads",
        issues_url:
          "https://api.github.com/repos/jquery/jquery/issues{/number}",
        pulls_url: "https://api.github.com/repos/jquery/jquery/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jquery/jquery/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jquery/jquery/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/jquery/jquery/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jquery/jquery/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jquery/jquery/deployments",
        created_at: "2009-04-03T15:20:14Z",
        updated_at: "2025-07-10T21:16:05Z",
        pushed_at: "2025-07-01T05:29:50Z",
        git_url: "git://github.com/jquery/jquery.git",
        ssh_url: "git@github.com:jquery/jquery.git",
        clone_url: "https://github.com/jquery/jquery.git",
        svn_url: "https://github.com/jquery/jquery",
        homepage: "https://jquery.com",
        size: 34467,
        stargazers_count: 59543,
        watchers_count: 59543,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: false,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 20576,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 94,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["jquery"],
        visibility: "public",
        forks: 20576,
        open_issues: 94,
        watchers: 59543,
        default_branch: "main",
        score: 1,
        order: 30,
      },
    ],
  },
  {
    key: "123123saszcassdwqeqwe",
    data: [
      {
        id: 1334369,
        node_id: "MDEwOlJlcG9zaXRvcnkxMzM0MzY5",
        name: "resume.github.com",
        full_name: "resume/resume.github.com",
        private: false,
        owner: {
          login: "resume",
          id: 602612,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjYwMjYxMg==",
          avatar_url: "https://avatars.githubusercontent.com/u/602612?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/resume",
          html_url: "https://github.com/resume",
          followers_url: "https://api.github.com/users/resume/followers",
          following_url:
            "https://api.github.com/users/resume/following{/other_user}",
          gists_url: "https://api.github.com/users/resume/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/resume/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/resume/subscriptions",
          organizations_url: "https://api.github.com/users/resume/orgs",
          repos_url: "https://api.github.com/users/resume/repos",
          events_url: "https://api.github.com/users/resume/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/resume/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/resume/resume.github.com",
        description: "Resumes generated using the GitHub informations",
        fork: false,
        url: "https://api.github.com/repos/resume/resume.github.com",
        forks_url:
          "https://api.github.com/repos/resume/resume.github.com/forks",
        keys_url:
          "https://api.github.com/repos/resume/resume.github.com/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/resume/resume.github.com/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/resume/resume.github.com/teams",
        hooks_url:
          "https://api.github.com/repos/resume/resume.github.com/hooks",
        issue_events_url:
          "https://api.github.com/repos/resume/resume.github.com/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/resume/resume.github.com/events",
        assignees_url:
          "https://api.github.com/repos/resume/resume.github.com/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/resume/resume.github.com/branches{/branch}",
        tags_url: "https://api.github.com/repos/resume/resume.github.com/tags",
        blobs_url:
          "https://api.github.com/repos/resume/resume.github.com/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/resume/resume.github.com/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/resume/resume.github.com/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/resume/resume.github.com/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/resume/resume.github.com/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/resume/resume.github.com/languages",
        stargazers_url:
          "https://api.github.com/repos/resume/resume.github.com/stargazers",
        contributors_url:
          "https://api.github.com/repos/resume/resume.github.com/contributors",
        subscribers_url:
          "https://api.github.com/repos/resume/resume.github.com/subscribers",
        subscription_url:
          "https://api.github.com/repos/resume/resume.github.com/subscription",
        commits_url:
          "https://api.github.com/repos/resume/resume.github.com/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/resume/resume.github.com/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/resume/resume.github.com/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/resume/resume.github.com/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/resume/resume.github.com/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/resume/resume.github.com/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/resume/resume.github.com/merges",
        archive_url:
          "https://api.github.com/repos/resume/resume.github.com/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/resume/resume.github.com/downloads",
        issues_url:
          "https://api.github.com/repos/resume/resume.github.com/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/resume/resume.github.com/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/resume/resume.github.com/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/resume/resume.github.com/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/resume/resume.github.com/labels{/name}",
        releases_url:
          "https://api.github.com/repos/resume/resume.github.com/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/resume/resume.github.com/deployments",
        created_at: "2011-02-06T13:39:55Z",
        updated_at: "2025-07-11T07:45:47Z",
        pushed_at: "2023-02-15T06:38:51Z",
        git_url: "git://github.com/resume/resume.github.com.git",
        ssh_url: "git@github.com:resume/resume.github.com.git",
        clone_url: "https://github.com/resume/resume.github.com.git",
        svn_url: "https://github.com/resume/resume.github.com",
        homepage: "https://resume.github.com",
        size: 411,
        stargazers_count: 62548,
        watchers_count: 62548,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 1356,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 66,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 1356,
        open_issues: 66,
        watchers: 62548,
        default_branch: "master",
        score: 1,
        order: 25,
      },
      {
        id: 53809090,
        node_id: "MDEwOlJlcG9zaXRvcnk1MzgwOTA5MA==",
        name: "anime",
        full_name: "juliangarnier/anime",
        private: false,
        owner: {
          login: "juliangarnier",
          id: 1268691,
          node_id: "MDQ6VXNlcjEyNjg2OTE=",
          avatar_url: "https://avatars.githubusercontent.com/u/1268691?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/juliangarnier",
          html_url: "https://github.com/juliangarnier",
          followers_url: "https://api.github.com/users/juliangarnier/followers",
          following_url:
            "https://api.github.com/users/juliangarnier/following{/other_user}",
          gists_url:
            "https://api.github.com/users/juliangarnier/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/juliangarnier/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/juliangarnier/subscriptions",
          organizations_url: "https://api.github.com/users/juliangarnier/orgs",
          repos_url: "https://api.github.com/users/juliangarnier/repos",
          events_url:
            "https://api.github.com/users/juliangarnier/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/juliangarnier/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/juliangarnier/anime",
        description: "JavaScript animation engine",
        fork: false,
        url: "https://api.github.com/repos/juliangarnier/anime",
        forks_url: "https://api.github.com/repos/juliangarnier/anime/forks",
        keys_url:
          "https://api.github.com/repos/juliangarnier/anime/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/juliangarnier/anime/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/juliangarnier/anime/teams",
        hooks_url: "https://api.github.com/repos/juliangarnier/anime/hooks",
        issue_events_url:
          "https://api.github.com/repos/juliangarnier/anime/issues/events{/number}",
        events_url: "https://api.github.com/repos/juliangarnier/anime/events",
        assignees_url:
          "https://api.github.com/repos/juliangarnier/anime/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/juliangarnier/anime/branches{/branch}",
        tags_url: "https://api.github.com/repos/juliangarnier/anime/tags",
        blobs_url:
          "https://api.github.com/repos/juliangarnier/anime/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/juliangarnier/anime/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/juliangarnier/anime/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/juliangarnier/anime/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/juliangarnier/anime/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/juliangarnier/anime/languages",
        stargazers_url:
          "https://api.github.com/repos/juliangarnier/anime/stargazers",
        contributors_url:
          "https://api.github.com/repos/juliangarnier/anime/contributors",
        subscribers_url:
          "https://api.github.com/repos/juliangarnier/anime/subscribers",
        subscription_url:
          "https://api.github.com/repos/juliangarnier/anime/subscription",
        commits_url:
          "https://api.github.com/repos/juliangarnier/anime/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/juliangarnier/anime/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/juliangarnier/anime/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/juliangarnier/anime/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/juliangarnier/anime/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/juliangarnier/anime/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/juliangarnier/anime/merges",
        archive_url:
          "https://api.github.com/repos/juliangarnier/anime/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/juliangarnier/anime/downloads",
        issues_url:
          "https://api.github.com/repos/juliangarnier/anime/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/juliangarnier/anime/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/juliangarnier/anime/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/juliangarnier/anime/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/juliangarnier/anime/labels{/name}",
        releases_url:
          "https://api.github.com/repos/juliangarnier/anime/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/juliangarnier/anime/deployments",
        created_at: "2016-03-13T21:37:45Z",
        updated_at: "2025-07-11T08:28:43Z",
        pushed_at: "2025-07-08T10:11:14Z",
        git_url: "git://github.com/juliangarnier/anime.git",
        ssh_url: "git@github.com:juliangarnier/anime.git",
        clone_url: "https://github.com/juliangarnier/anime.git",
        svn_url: "https://github.com/juliangarnier/anime",
        homepage: "https://animejs.com",
        size: 67367,
        stargazers_count: 62195,
        watchers_count: 62195,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 4156,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 102,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "animation",
          "anime",
          "canvas",
          "css",
          "javascript",
          "javascript-library",
          "svg",
        ],
        visibility: "public",
        forks: 4156,
        open_issues: 102,
        watchers: 62195,
        default_branch: "master",
        score: 1,
        order: 26,
      },
      {
        id: 3955647,
        node_id: "MDEwOlJlcG9zaXRvcnkzOTU1NjQ3",
        name: "lodash",
        full_name: "lodash/lodash",
        private: false,
        owner: {
          login: "lodash",
          id: 2565403,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjI1NjU0MDM=",
          avatar_url: "https://avatars.githubusercontent.com/u/2565403?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lodash",
          html_url: "https://github.com/lodash",
          followers_url: "https://api.github.com/users/lodash/followers",
          following_url:
            "https://api.github.com/users/lodash/following{/other_user}",
          gists_url: "https://api.github.com/users/lodash/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lodash/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lodash/subscriptions",
          organizations_url: "https://api.github.com/users/lodash/orgs",
          repos_url: "https://api.github.com/users/lodash/repos",
          events_url: "https://api.github.com/users/lodash/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lodash/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/lodash/lodash",
        description:
          "A modern JavaScript utility library delivering modularity, performance, & extras.",
        fork: false,
        url: "https://api.github.com/repos/lodash/lodash",
        forks_url: "https://api.github.com/repos/lodash/lodash/forks",
        keys_url: "https://api.github.com/repos/lodash/lodash/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/lodash/lodash/teams",
        hooks_url: "https://api.github.com/repos/lodash/lodash/hooks",
        issue_events_url:
          "https://api.github.com/repos/lodash/lodash/issues/events{/number}",
        events_url: "https://api.github.com/repos/lodash/lodash/events",
        assignees_url:
          "https://api.github.com/repos/lodash/lodash/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/lodash/lodash/branches{/branch}",
        tags_url: "https://api.github.com/repos/lodash/lodash/tags",
        blobs_url: "https://api.github.com/repos/lodash/lodash/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/lodash/lodash/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/lodash/lodash/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/lodash/lodash/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/lodash/lodash/statuses/{sha}",
        languages_url: "https://api.github.com/repos/lodash/lodash/languages",
        stargazers_url: "https://api.github.com/repos/lodash/lodash/stargazers",
        contributors_url:
          "https://api.github.com/repos/lodash/lodash/contributors",
        subscribers_url:
          "https://api.github.com/repos/lodash/lodash/subscribers",
        subscription_url:
          "https://api.github.com/repos/lodash/lodash/subscription",
        commits_url: "https://api.github.com/repos/lodash/lodash/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/lodash/lodash/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/lodash/lodash/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/lodash/lodash/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/lodash/lodash/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/lodash/lodash/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/lodash/lodash/merges",
        archive_url:
          "https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/lodash/lodash/downloads",
        issues_url:
          "https://api.github.com/repos/lodash/lodash/issues{/number}",
        pulls_url: "https://api.github.com/repos/lodash/lodash/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/lodash/lodash/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/lodash/lodash/labels{/name}",
        releases_url:
          "https://api.github.com/repos/lodash/lodash/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/lodash/lodash/deployments",
        created_at: "2012-04-07T04:11:46Z",
        updated_at: "2025-07-11T06:14:25Z",
        pushed_at: "2024-12-12T22:27:04Z",
        git_url: "git://github.com/lodash/lodash.git",
        ssh_url: "git@github.com:lodash/lodash.git",
        clone_url: "https://github.com/lodash/lodash.git",
        svn_url: "https://github.com/lodash/lodash",
        homepage: "https://lodash.com/",
        size: 49142,
        stargazers_count: 60720,
        watchers_count: 60720,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 7064,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 114,
        license: {
          key: "other",
          name: "Other",
          spdx_id: "NOASSERTION",
          url: null,
          node_id: "MDc6TGljZW5zZTA=",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["javascript", "lodash", "modules", "utilities"],
        visibility: "public",
        forks: 7064,
        open_issues: 114,
        watchers: 60720,
        default_branch: "main",
        score: 1,
        order: 27,
      },
      {
        id: 3228505,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjI4NTA1",
        name: "atom",
        full_name: "atom/atom",
        private: false,
        owner: {
          login: "atom",
          id: 1089146,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjEwODkxNDY=",
          avatar_url: "https://avatars.githubusercontent.com/u/1089146?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/atom",
          html_url: "https://github.com/atom",
          followers_url: "https://api.github.com/users/atom/followers",
          following_url:
            "https://api.github.com/users/atom/following{/other_user}",
          gists_url: "https://api.github.com/users/atom/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/atom/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/atom/subscriptions",
          organizations_url: "https://api.github.com/users/atom/orgs",
          repos_url: "https://api.github.com/users/atom/repos",
          events_url: "https://api.github.com/users/atom/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/atom/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/atom/atom",
        description: ":atom: The hackable text editor",
        fork: false,
        url: "https://api.github.com/repos/atom/atom",
        forks_url: "https://api.github.com/repos/atom/atom/forks",
        keys_url: "https://api.github.com/repos/atom/atom/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/atom/atom/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/atom/atom/teams",
        hooks_url: "https://api.github.com/repos/atom/atom/hooks",
        issue_events_url:
          "https://api.github.com/repos/atom/atom/issues/events{/number}",
        events_url: "https://api.github.com/repos/atom/atom/events",
        assignees_url:
          "https://api.github.com/repos/atom/atom/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/atom/atom/branches{/branch}",
        tags_url: "https://api.github.com/repos/atom/atom/tags",
        blobs_url: "https://api.github.com/repos/atom/atom/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/atom/atom/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/atom/atom/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/atom/atom/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/atom/atom/statuses/{sha}",
        languages_url: "https://api.github.com/repos/atom/atom/languages",
        stargazers_url: "https://api.github.com/repos/atom/atom/stargazers",
        contributors_url: "https://api.github.com/repos/atom/atom/contributors",
        subscribers_url: "https://api.github.com/repos/atom/atom/subscribers",
        subscription_url: "https://api.github.com/repos/atom/atom/subscription",
        commits_url: "https://api.github.com/repos/atom/atom/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/atom/atom/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/atom/atom/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/atom/atom/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/atom/atom/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/atom/atom/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/atom/atom/merges",
        archive_url:
          "https://api.github.com/repos/atom/atom/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/atom/atom/downloads",
        issues_url: "https://api.github.com/repos/atom/atom/issues{/number}",
        pulls_url: "https://api.github.com/repos/atom/atom/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/atom/atom/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/atom/atom/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/atom/atom/labels{/name}",
        releases_url: "https://api.github.com/repos/atom/atom/releases{/id}",
        deployments_url: "https://api.github.com/repos/atom/atom/deployments",
        created_at: "2012-01-20T18:18:21Z",
        updated_at: "2025-07-11T07:44:05Z",
        pushed_at: "2023-01-03T10:49:48Z",
        git_url: "git://github.com/atom/atom.git",
        ssh_url: "git@github.com:atom/atom.git",
        clone_url: "https://github.com/atom/atom.git",
        svn_url: "https://github.com/atom/atom",
        homepage: "https://atom.io",
        size: 330585,
        stargazers_count: 60545,
        watchers_count: 60545,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        has_discussions: true,
        forks_count: 17320,
        mirror_url: null,
        archived: true,
        disabled: false,
        open_issues_count: 993,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "atom",
          "editor",
          "electron",
          "javascript",
          "linux",
          "macos",
          "windows",
        ],
        visibility: "public",
        forks: 17320,
        open_issues: 993,
        watchers: 60545,
        default_branch: "master",
        score: 1,
        order: 28,
      },
      {
        id: 4311796,
        node_id: "MDEwOlJlcG9zaXRvcnk0MzExNzk2",
        name: "markdown-here",
        full_name: "adam-p/markdown-here",
        private: false,
        owner: {
          login: "adam-p",
          id: 425687,
          node_id: "MDQ6VXNlcjQyNTY4Nw==",
          avatar_url: "https://avatars.githubusercontent.com/u/425687?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/adam-p",
          html_url: "https://github.com/adam-p",
          followers_url: "https://api.github.com/users/adam-p/followers",
          following_url:
            "https://api.github.com/users/adam-p/following{/other_user}",
          gists_url: "https://api.github.com/users/adam-p/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/adam-p/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/adam-p/subscriptions",
          organizations_url: "https://api.github.com/users/adam-p/orgs",
          repos_url: "https://api.github.com/users/adam-p/repos",
          events_url: "https://api.github.com/users/adam-p/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/adam-p/received_events",
          type: "User",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/adam-p/markdown-here",
        description:
          "Google Chrome, Firefox, and Thunderbird extension that lets you write email in Markdown and render it before sending.",
        fork: false,
        url: "https://api.github.com/repos/adam-p/markdown-here",
        forks_url: "https://api.github.com/repos/adam-p/markdown-here/forks",
        keys_url:
          "https://api.github.com/repos/adam-p/markdown-here/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/adam-p/markdown-here/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/adam-p/markdown-here/teams",
        hooks_url: "https://api.github.com/repos/adam-p/markdown-here/hooks",
        issue_events_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues/events{/number}",
        events_url: "https://api.github.com/repos/adam-p/markdown-here/events",
        assignees_url:
          "https://api.github.com/repos/adam-p/markdown-here/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/adam-p/markdown-here/branches{/branch}",
        tags_url: "https://api.github.com/repos/adam-p/markdown-here/tags",
        blobs_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/adam-p/markdown-here/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/adam-p/markdown-here/languages",
        stargazers_url:
          "https://api.github.com/repos/adam-p/markdown-here/stargazers",
        contributors_url:
          "https://api.github.com/repos/adam-p/markdown-here/contributors",
        subscribers_url:
          "https://api.github.com/repos/adam-p/markdown-here/subscribers",
        subscription_url:
          "https://api.github.com/repos/adam-p/markdown-here/subscription",
        commits_url:
          "https://api.github.com/repos/adam-p/markdown-here/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/adam-p/markdown-here/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/adam-p/markdown-here/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/adam-p/markdown-here/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/adam-p/markdown-here/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/adam-p/markdown-here/merges",
        archive_url:
          "https://api.github.com/repos/adam-p/markdown-here/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/adam-p/markdown-here/downloads",
        issues_url:
          "https://api.github.com/repos/adam-p/markdown-here/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/adam-p/markdown-here/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/adam-p/markdown-here/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/adam-p/markdown-here/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/adam-p/markdown-here/labels{/name}",
        releases_url:
          "https://api.github.com/repos/adam-p/markdown-here/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/adam-p/markdown-here/deployments",
        created_at: "2012-05-13T03:27:22Z",
        updated_at: "2025-07-11T07:02:39Z",
        pushed_at: "2025-07-10T01:19:23Z",
        git_url: "git://github.com/adam-p/markdown-here.git",
        ssh_url: "git@github.com:adam-p/markdown-here.git",
        clone_url: "https://github.com/adam-p/markdown-here.git",
        svn_url: "https://github.com/adam-p/markdown-here",
        homepage: "https://markdown-here.com",
        size: 17157,
        stargazers_count: 59944,
        watchers_count: 59944,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: true,
        forks_count: 11200,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 319,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 11200,
        open_issues: 319,
        watchers: 59944,
        default_branch: "master",
        score: 1,
        order: 29,
      },
      {
        id: 167174,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjcxNzQ=",
        name: "jquery",
        full_name: "jquery/jquery",
        private: false,
        owner: {
          login: "jquery",
          id: 70142,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjcwMTQy",
          avatar_url: "https://avatars.githubusercontent.com/u/70142?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jquery",
          html_url: "https://github.com/jquery",
          followers_url: "https://api.github.com/users/jquery/followers",
          following_url:
            "https://api.github.com/users/jquery/following{/other_user}",
          gists_url: "https://api.github.com/users/jquery/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jquery/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jquery/subscriptions",
          organizations_url: "https://api.github.com/users/jquery/orgs",
          repos_url: "https://api.github.com/users/jquery/repos",
          events_url: "https://api.github.com/users/jquery/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jquery/received_events",
          type: "Organization",
          user_view_type: "public",
          site_admin: false,
        },
        html_url: "https://github.com/jquery/jquery",
        description: "jQuery JavaScript Library",
        fork: false,
        url: "https://api.github.com/repos/jquery/jquery",
        forks_url: "https://api.github.com/repos/jquery/jquery/forks",
        keys_url: "https://api.github.com/repos/jquery/jquery/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jquery/jquery/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jquery/jquery/teams",
        hooks_url: "https://api.github.com/repos/jquery/jquery/hooks",
        issue_events_url:
          "https://api.github.com/repos/jquery/jquery/issues/events{/number}",
        events_url: "https://api.github.com/repos/jquery/jquery/events",
        assignees_url:
          "https://api.github.com/repos/jquery/jquery/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jquery/jquery/branches{/branch}",
        tags_url: "https://api.github.com/repos/jquery/jquery/tags",
        blobs_url: "https://api.github.com/repos/jquery/jquery/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jquery/jquery/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jquery/jquery/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/jquery/jquery/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jquery/jquery/statuses/{sha}",
        languages_url: "https://api.github.com/repos/jquery/jquery/languages",
        stargazers_url: "https://api.github.com/repos/jquery/jquery/stargazers",
        contributors_url:
          "https://api.github.com/repos/jquery/jquery/contributors",
        subscribers_url:
          "https://api.github.com/repos/jquery/jquery/subscribers",
        subscription_url:
          "https://api.github.com/repos/jquery/jquery/subscription",
        commits_url: "https://api.github.com/repos/jquery/jquery/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jquery/jquery/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jquery/jquery/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jquery/jquery/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jquery/jquery/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jquery/jquery/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jquery/jquery/merges",
        archive_url:
          "https://api.github.com/repos/jquery/jquery/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/jquery/jquery/downloads",
        issues_url:
          "https://api.github.com/repos/jquery/jquery/issues{/number}",
        pulls_url: "https://api.github.com/repos/jquery/jquery/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jquery/jquery/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jquery/jquery/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/jquery/jquery/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jquery/jquery/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jquery/jquery/deployments",
        created_at: "2009-04-03T15:20:14Z",
        updated_at: "2025-07-10T21:16:05Z",
        pushed_at: "2025-07-01T05:29:50Z",
        git_url: "git://github.com/jquery/jquery.git",
        ssh_url: "git@github.com:jquery/jquery.git",
        clone_url: "https://github.com/jquery/jquery.git",
        svn_url: "https://github.com/jquery/jquery",
        homepage: "https://jquery.com",
        size: 34467,
        stargazers_count: 59543,
        watchers_count: 59543,
        language: "JavaScript",
        has_issues: true,
        has_projects: false,
        has_downloads: false,
        has_wiki: true,
        has_pages: false,
        has_discussions: true,
        forks_count: 20576,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 94,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: ["jquery"],
        visibility: "public",
        forks: 20576,
        open_issues: 94,
        watchers: 59543,
        default_branch: "main",
        score: 1,
        order: 30,
      },
    ],
  },
];
