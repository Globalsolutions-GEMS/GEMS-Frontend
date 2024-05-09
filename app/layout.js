// import theme style scss file
import '../styles/theme.scss';

export const metadata = {
    title: 'Global Solutions - ERP',
    description: '',
    keywords: ''
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}
            </body>
        </html>
    )
}
