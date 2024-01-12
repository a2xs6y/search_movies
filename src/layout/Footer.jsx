function Footer() {
    return (
        <footer className='page-footer teal lighten-3'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} A2x S6y
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/a2xs6y/search_movies'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
