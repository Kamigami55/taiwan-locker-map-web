import Navbar from '../components/Navbar'

export default function IndexPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <iframe
        className="relative flex-grow w-screen"
        src="https://www.google.com/maps/d/u/2/embed?mid=1gW8QWdqyhAODSdi235C60NqjwhuhZpdl"
        scrolling="no"
        frameBorder="0"
      />
    </div>
  )
}
