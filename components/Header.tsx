export const Header = () => {
  return (
    <header className="flex justify-between w-[80vw] m-auto">
      <div className="left">LOGO</div>
      <div className="right w-[20%]">
        <ul className="flex justify-between">
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};
