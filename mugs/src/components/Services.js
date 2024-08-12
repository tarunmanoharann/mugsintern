// components/Services.js
export default function Services() {
    const services = [
      {
        icon: 'ui-ux',
        title: 'UI/UX',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum',
      },
      {
        icon: 'web-design',
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum',
      },
      {
        icon: 'app-design',
        title: 'App Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum',
      },
      {
        icon: 'graphic-design',
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum',
      },
    ];
  
    return (
      <section id="services" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-900 dark:text-white">Services</h2>
          <p className="mb-12 text-center text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <img src={`/icons/${service.icon}.svg`} alt={service.title} className="w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }