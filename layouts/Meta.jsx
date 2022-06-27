import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'แคเรียเซ็นเตอร์ :: IT@KMITL',
  keywords: 'แคเรียเซ็นเตอร์, สหกิจศึกษา, ฝึกงาน, หาบริษัทฝึกงาน, หาบริษัทสหกิจ',
  description: 'ระบบสนับสนุนการหางานสำหรับนักศึกษาที่ต้องการ ฝึกงาน สหกิจศึกษา งานพาทไทม์ หรืองานประจำ พัฒนาและสนับสนุนโดย คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
}

export default Meta