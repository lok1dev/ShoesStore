import Header from '~/layouts/components/Header'

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className='Container'>
                <div className='Content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;