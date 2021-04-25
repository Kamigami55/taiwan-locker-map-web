import styles from '../styles/Home.module.css'

export default function IndexPage() {
  return (
    <div className={styles.homePageContainer}>
      <iframe
        className={styles.myGoogleMap}
        src="https://www.google.com/maps/d/u/2/embed?mid=1gW8QWdqyhAODSdi235C60NqjwhuhZpdl"
        scrolling="no"
        frameBorder="0"
      />
    </div>
  )
}
