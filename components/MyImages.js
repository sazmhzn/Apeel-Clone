

export default function MyImage(props) {
  const url = {
    src: props.src
  }
  console.log(url)
  return (
    <div className="absolute top-20 -z-10 w-full min-h-screen">
      <img src={props.src} alt="Picture of the author" />
    </div>
  );
}
