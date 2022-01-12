const students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 21,
        major: 'CCE',
        skills: ['Communication','Collaboration','Time management'],
        address: {
            country: 'USA',
            city: 'Massachusetts',
            postcode: '94123',
            additionalInfo: 'He lives in Harvard dorms.'
        },
        education: {
            type: 'Diploma',
            yearOfGraduation: 2012,
            school: 'Providence',
            country: 'Lebanon'
        },
        createdDate: Date.now()
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 18,
        major: 'Mechanical engineering',
        skills: ['Communication','Information literary'],
        address: {
            country: 'UK',
            city: 'London',
            postcode: 'EC1A'
        },
        education: {
            type: 'Multiple',
            yearOfGraduation: 2020,
            school: 'The Hampshire',
            country: 'London'
        },
        createdDate: Date.now()
    },
    {
        firstName: 'Adams',
        lastName: 'Traversy',
        age: 20,
        major: 'Audit',
        skills: ['Organizational','Critical thinking', 'Creativity','Problem solving'],
        address: {
            country: 'USA',
            city: 'California',
            postcode: '90212',
            additionalInfo: '101 California Street'
        },
        education: {
            type: 'Diploma',
            yearOfGraduation: 2014,
            school: 'Berkeley',
            country: 'USA'
        },
        createdDate: Date.now()
    }
]

export default students