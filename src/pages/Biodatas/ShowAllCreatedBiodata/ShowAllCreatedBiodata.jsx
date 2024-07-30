const biodataList = [
  {
    id: 1,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=1",
    division: "Dhaka",
    age: 25,
    occupation: "Engineer",
  },
  {
    id: 2,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=2",
    division: "Chattagram",
    age: 30,
    occupation: "Doctor",
  },
  {
    id: 3,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=3",
    division: "Rangpur",
    age: 45,
    occupation: "Teacher",
  },
  {
    id: 4,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=4",
    division: "Barisal",
    age: 23,
    occupation: "Nurse",
  },
  {
    id: 5,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=5",
    division: "Khulna",
    age: 28,
    occupation: "Lawyer",
  },
  {
    id: 6,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=6",
    division: "Maymansign",
    age: 33,
    occupation: "Designer",
  },
  {
    id: 7,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=7",
    division: "Sylhet",
    age: 50,
    occupation: "Artist",
  },
  {
    id: 8,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=8",
    division: "Dhaka",
    age: 27,
    occupation: "Architect",
  },
  {
    id: 9,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=9",
    division: "Chattagram",
    age: 22,
    occupation: "Student",
  },
  {
    id: 10,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=10",
    division: "Rangpur",
    age: 35,
    occupation: "Photographer",
  },
  {
    id: 11,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=11",
    division: "Barisal",
    age: 40,
    occupation: "Chef",
  },
  {
    id: 12,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=12",
    division: "Khulna",
    age: 29,
    occupation: "Writer",
  },
  {
    id: 13,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=13",
    division: "Maymansign",
    age: 32,
    occupation: "Pilot",
  },
  {
    id: 14,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=14",
    division: "Sylhet",
    age: 28,
    occupation: "Scientist",
  },
  {
    id: 15,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=15",
    division: "Dhaka",
    age: 55,
    occupation: "Musician",
  },
  {
    id: 16,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=16",
    division: "Chattagram",
    age: 36,
    occupation: "Dancer",
  },
  {
    id: 17,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=17",
    division: "Rangpur",
    age: 31,
    occupation: "Actor",
  },
  {
    id: 18,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=18",
    division: "Barisal",
    age: 41,
    occupation: "Model",
  },
  {
    id: 19,
    type: "Male",
    profileImage: "https://i.pravatar.cc/150?img=19",
    division: "Khulna",
    age: 26,
    occupation: "Software Engineer",
  },
  {
    id: 20,
    type: "Female",
    profileImage: "https://i.pravatar.cc/150?img=20",
    division: "Maymansign",
    age: 24,
    occupation: "Journalist",
  },
];

const ShowAllCreatedBiodata = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Show all created biodata</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {biodataList.map((biodata) => (
          <div
            key={biodata.id}
            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center"
          >
            <img
              className="w-32 h-32 rounded-full mb-4"
              src={biodata.profileImage}
              alt={biodata.type}
            />
            <p>Biodata Id: {biodata.id}</p>
            <p>Biodata Type: {biodata.type}</p>
            <p>Division: {biodata.division}</p>
            <p>Age: {biodata.age}</p>
            <p>Occupation: {biodata.occupation}</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllCreatedBiodata;
