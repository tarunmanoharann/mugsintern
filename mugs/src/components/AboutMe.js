// components/AboutMe.js
export default function AboutMe() {
    return (
      <section id="about-me" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-900 dark:text-white">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
                <img src="/about-image.jpg" alt="About Me" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-full -mr-12 -mt-12"></div>
            </div>
            <div>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
              </p>
              <div className="space-y-4">
                {[
                  { name: 'UX', percent: 90 },
                  { name: 'Website Design', percent: 80 },
                  { name: 'App Design', percent: 70 },
                  { name: 'Graphic Design', percent: 60 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-white">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-white">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }