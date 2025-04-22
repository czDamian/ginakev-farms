import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer" className="py-6 px-4 bg-[#005467] text-white">
      <div className="text-sm text-center">© 2025. All rights reserved</div>
      <div className="mt-8 text-sm text-center">
        Website Designed by
        <Link href="https://x.com/buzorDamian" className="animate-pulse px-1">
          Damian
        </Link>
      </div>
    </section>
  );
};

export default Footer;
