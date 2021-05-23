import CourseCard from 'components/course-card'

const CourseDirectory = () => {
  const foundationList = [
    {
      title: 'How This Course Will Work',
      slug: '/lessons/how-this-course-will-work'
    },
    {
      title: 'Introduction to Cryptocurrency',
      slug: '/lessons/introduction-to-cryptocurrency'
    }
  ];

  return (
    <>
      <CourseCard
        heading="Foundation"
        description="This section will cover what to expect and some history of what lead to the creation of the first cryptocurrencies."
        list={foundationList}
      ></CourseCard>
    </>
  )
}

export default CourseDirectory