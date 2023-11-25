function Links() {
  return (
    <div className="my-auto">
      <div>
        {/* This text navbar will not show on mobile phones */}
        <div className="hidden sm:flex my-auto space-x-2 text-sky-400">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Projects</div>
          <div className="cursor-pointer">Education</div>
          <div className="cursor-pointer">Contacts</div>
          <div className="cursor-pointer">Resume</div>
        </div>
      </div>
    </div>
  );
}

export default Links;
