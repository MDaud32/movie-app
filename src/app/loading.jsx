import Image from "next/image";

function loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="its a spinner" width={100} height={100} />
    </div>
  );
}

export default loading;
