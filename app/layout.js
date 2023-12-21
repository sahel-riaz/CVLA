import './globals.css'
import '../public/fonts/Inter/stylesheet.css'

export const metadata = {
	title: 'CVLA',
	description: 'Computer Vision, Learning and Applications Research Group',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
