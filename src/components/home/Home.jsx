import Switch from "./switch/Switch";

export default function Home() {
  return (
    <>
      <div className="container w-100 h-100 d-flex flex-column align-items-center justify-content-center fs-5">
        <Switch />
        <div className="text-center mt-4 fs-1">Hello World</div>
      </div>
    </>
  );
}
