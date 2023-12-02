
const patientsData = [
    // { id: 1, name: 'Ramkumar', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
    // { id: 2, name: 'Ashok', updatedby: 'Matthew Parker', diagnosis: 'Cough' },
    // { id: 3, name: 'Akash', updatedby: 'Matthew Parker', diagnosis: 'Cough' },
    // { id: 4, name: 'Ranjeet', updatedby: 'Matthew Parker', diagnosis: 'Cough' },
    // { id: 5, name: 'Sahil', updatedby: 'Matthew Parker', diagnosis: 'Cough' },
    {
        id: 1,
        name: 'Ramkumar',
        records: [
          { date: '01-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '30-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Throat infection', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '10-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Fever', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },
      {
        id: 2,
        name: 'Ashok',
        records: [
          { date: '01-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Back Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '05-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Headache', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '10-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Fever', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },
      {
        id: 3,
        name: 'Akash',
        records: [
          { date: '01-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '12-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Headache', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '10-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'High Fever', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },
      {
        id: 4,
        name: 'Sahil',
        records: [
          { date: '01-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '26-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Body Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '10-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Throat infection', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },
      {
        id: 5,
        name: 'Rohan',
        records: [
          { date: '01-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '20-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Throat infection', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '10-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Headache', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },
      {
        id: 6,
        name: 'Sneha',
        records: [
          { date: '21-Oct-2023', updatedby: 'Matthew Parker', diagnosis: 'Have Stomach Pain', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '02-Aug-2023', updatedby: 'Matthew Parker', diagnosis: 'Throat infection', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          { date: '23-May-2023', updatedby: 'Matthew Parker', diagnosis: 'Headache', description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias incidunt totam consequatur' },
          // Add more records as needed
        ],
      },

    // Add more patients
  ];
  
  export default patientsData;