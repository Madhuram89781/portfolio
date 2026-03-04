export default function CodingProfiles() {
    const profiles = [
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/madhuram8978/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
        },
        {
            name: 'CodeChef',
            url: 'https://www.codechef.com/users/madhuram8978',
            img: 'https://cdn.codechef.com/images/cc-logo.svg',
        },
        {
            name: 'Codeforces',
            url: 'https://codeforces.com/profile/madhuram8978',
            img: 'https://sta.codeforces.com/s/93347/images/codeforces-logo-with-telegram.png',
        },
        {
            name: 'GeeksforGeeks',
            url: 'https://www.geeksforgeeks.org/user/madhuram8978/',
            icon: 'fas fa-code',
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Madhuram89781',
            img: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/sundaramadhuram/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
        },
    ]

    return (
        <section className="section">
            <h2 className="section-title">Coding Profiles</h2>
            <div className="social-container">
                {profiles.map((p, i) => (
                    <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={p.name}
                        key={i}
                    >
                        {p.img ? (
                            <img src={p.img} alt={p.name} />
                        ) : (
                            <i className={p.icon}></i>
                        )}
                        <span className="social-label">{p.name}</span>
                    </a>
                ))}
            </div>
        </section>
    )
}
