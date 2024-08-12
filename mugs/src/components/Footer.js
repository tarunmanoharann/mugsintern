// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
              <div key={item} className="px-5 py-2">
                <a href={`#${item.toLowerCase()}`} className="text-base leading-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  {item}
                </a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">{social}</span>
                <img src={`/icons/${social}.svg`} alt={social} className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Muhammad Umair. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }