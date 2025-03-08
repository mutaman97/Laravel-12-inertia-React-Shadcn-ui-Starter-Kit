// import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="container mt-[100px] mb-12 flex flex-col items-end justify-between px-4 md:flex-row">
        <h4 className="font-semibold md:max-w-[480px]">We build bridges between Companies and Customers</h4>
        <p className="text-secondary-foreground text-lg font-medium md:max-w-[490px]">
          To build software that gives customer-facing teams at small-and medium-sized businesses the ability to create fruitful and enduring
          relationships with customer
        </p>
      </div>

      <img width={1440} height={634} className="mx-auto" src="/assets/images/about-us-landing/banner.png" alt="shadcnkit" />
    </>
  )
}

export default Header
