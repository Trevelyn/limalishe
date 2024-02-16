import React from 'react'

function About() {
  
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO & Founder',
      photo: '/team-member1.png', // Replace with your actual photo path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna lorem, tincidunt sed auctor in, pretium quis ipsum.',
    },
    {
      name: 'Jane Smith',
      title: 'Head of Marketing',
      photo: '/team-member2.png', // Replace with your actual photo path
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse magna lorem, tincidunt sed auctor in, pretium quis ipsum.',
    },
    // Add more team members as needed
  ];

  return (
    <section className="bg-gray-100 py-16 px-8 lg:px-20">
      <div className="container mx-auto grid gap-8">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="prose text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
              est ligula, at lobortis quam tincidunt vitae. Mauris id viverra
              lectus. Cras ultricies sapien vitae nulla tincidunt, vitae tincidunt
              nulla tincidunt. In hac habitasse platea dictumst. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis
            </p>
          </div>
          <div className="md:col-span-1">
            <img src="/about-us-photo.png" alt="About Us Photo" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <h2 className="text-2xl font-bold mb-8">Our Team</h2>
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4">
              <img src={member.photo} alt={member.name} className="w-48 h-48 rounded-full border-4 border-white" />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-600 prose max-w-xs">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
  )
}

export default About