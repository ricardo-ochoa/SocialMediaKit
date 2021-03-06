import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layaouts'
import styles from '../styles/Home.module.css'
import { ButtonCheckout } from '../components/ui/index';


import { Flex, useColorMode, useColorModeValue,Text,Heading, UnorderedList, ListItem, Stack, Box, Image, Button} from '@chakra-ui/react'
import Link from 'next/link';



const Home: NextPage = () => {

  const { toggleColorMode } = useColorMode();

  const [ colorMain , setColorMain ] = useState('#FF5757')

  const [ ImageMain , setImageMain ] = useState('https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rojo_bxg7yq.jpg')

  useEffect(() => {
    
  }, [])
  


  const color = useColorModeValue(colorMain, colorMain)

  const colorRed = () => {
    const redcolor = '#FF5757'
    setColorMain(redcolor)

    const redImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rojo_bxg7yq.jpg'
    setImageMain( redImg )
  }

  const colorPurple = () => {
    const purplecolor = '#5827C1'
    setColorMain(purplecolor)

    const purpleImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/purple_y74qft.jpg'
    setImageMain( purpleImg )
  }

  const colorGreen = () => {
    const greencolor = '#00DA23'
    setColorMain(greencolor)

    const greenImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1655414970/Socialemediakit/green_lka1lu.jpg'
    setImageMain( greenImg )
  }

  const colorBlack = () => {
    const greencolor = '#000000'
    setColorMain(greencolor)

    const blackImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/negro_zedwy5.jpg'
    setImageMain( blackImg )
  }

  const colorPink = () => {
    const greencolor = '#E31CB8'
    setColorMain(greencolor)

    const pinkImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883722/Socialemediakit/rosa_xqmhvy.jpg'
    setImageMain( pinkImg )
  }

  const colorAqua = () => {
    const greencolor = '#65D8D1'
    setColorMain(greencolor)

    const aquaImg = 'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1653883721/Socialemediakit/turquesa_w3btp9.jpg'
    setImageMain( aquaImg )
  }

  return (

      <Layout title='Social Media Kit | Paquete para redes sociales' color={colorMain}>


        <Stack  display={{ sm: "flex" }} direction={{ lg:"row", sm: "column" }} spacing={{ sm: 12 }} justifyContent={{sm:"center"}} alignItems={{ sm: "center" }} marginBottom="100px">
          <Flex alignItems="center" justifyContent="center" >
        

            {/* <video
            className='videomain'
            muted loop controls
            autoPlay
            >
            <source  src='https://res.cloudinary.com/dnxxkvpiz/video/upload/v1651952212/Socialemediakit/rojo_bjpuz2.mp4' type="video/mp4"></source>
            </video> */}

            <img className='videomain' src={ ImageMain } >
            </img>

          

            <svg width="325" height="457" viewBox="0 0 325 457" fill={color} xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M305 2H20C10.0589 2 2 10.0589 2 20V437C2 446.941 10.0589 455 20 455H305C314.941 455 323 446.941 323 437V20C323 10.0589 314.941 2 305 2ZM20 0C8.95431 0 0 8.95432 0 20V437C0 448.046 8.9543 457 20 457H305C316.046 457 325 448.046 325 437V20C325 8.9543 316.046 0 305 0H20Z" fill={color}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M34.5 54C44.7173 54 53 45.4934 53 35C53 24.5066 44.7173 16 34.5 16C24.2827 16 16 24.5066 16 35C16 45.4934 24.2827 54 34.5 54Z" fill={color}/>
              <path d="M67.6037 31.6719C67.5639 31.2997 67.3963 31.0099 67.1008 30.8026C66.8082 30.5952 66.4275 30.4915 65.9588 30.4915C65.6292 30.4915 65.3466 30.5412 65.1108 30.6406C64.875 30.7401 64.6946 30.875 64.5696 31.0455C64.4446 31.2159 64.3807 31.4105 64.3778 31.6293C64.3778 31.8111 64.419 31.9688 64.5014 32.1023C64.5866 32.2358 64.7017 32.3494 64.8466 32.4432C64.9915 32.5341 65.152 32.6108 65.3281 32.6733C65.5042 32.7358 65.6818 32.7884 65.8608 32.831L66.679 33.0355C67.0085 33.1122 67.3253 33.2159 67.6292 33.3466C67.9361 33.4773 68.2102 33.642 68.4517 33.8409C68.696 34.0398 68.8892 34.2798 69.0312 34.5611C69.1733 34.8423 69.2443 35.1719 69.2443 35.5497C69.2443 36.0611 69.1136 36.5114 68.8523 36.9006C68.5909 37.2869 68.2131 37.5895 67.7187 37.8082C67.2273 38.0242 66.6321 38.1321 65.9332 38.1321C65.2542 38.1321 64.6648 38.027 64.1648 37.8168C63.6676 37.6065 63.2784 37.2997 62.9971 36.8963C62.7187 36.4929 62.5682 36.0014 62.5454 35.4219H64.1008C64.1236 35.7259 64.2173 35.9787 64.3821 36.1804C64.5469 36.3821 64.7613 36.5327 65.0256 36.6321C65.2926 36.7315 65.5909 36.7813 65.9204 36.7813C66.2642 36.7813 66.5653 36.7301 66.8239 36.6278C67.0852 36.5227 67.2898 36.3778 67.4375 36.1932C67.5852 36.0057 67.6605 35.7869 67.6633 35.5369C67.6605 35.3097 67.5937 35.1222 67.4631 34.9744C67.3324 34.8239 67.1491 34.6989 66.9133 34.5994C66.6804 34.4972 66.4077 34.4063 66.0952 34.3267L65.1023 34.071C64.3835 33.8864 63.8153 33.6065 63.3977 33.2315C62.9829 32.8537 62.7756 32.3523 62.7756 31.7273C62.7756 31.2131 62.9148 30.7628 63.1932 30.3764C63.4744 29.9901 63.8565 29.6903 64.3395 29.4773C64.8224 29.2614 65.3693 29.1534 65.9801 29.1534C66.5994 29.1534 67.142 29.2614 67.6079 29.4773C68.0767 29.6903 68.4446 29.9872 68.7116 30.3679C68.9787 30.7457 69.1165 31.1804 69.125 31.6719H67.6037Z" fill={color}/>
              <path d="M78.452 33.6364C78.452 34.5767 78.2759 35.3821 77.9236 36.0526C77.5742 36.7202 77.0969 37.2315 76.4918 37.5867C75.8895 37.9418 75.2063 38.1193 74.4421 38.1193C73.6779 38.1193 72.9932 37.9418 72.3881 37.5867C71.7859 37.2287 71.3086 36.7159 70.9563 36.0483C70.6069 35.3778 70.4322 34.5739 70.4322 33.6364C70.4322 32.696 70.6069 31.892 70.9563 31.2244C71.3086 30.554 71.7859 30.0412 72.3881 29.6861C72.9932 29.331 73.6779 29.1534 74.4421 29.1534C75.2063 29.1534 75.8895 29.331 76.4918 29.6861C77.0969 30.0412 77.5742 30.554 77.9236 31.2244C78.2759 31.892 78.452 32.696 78.452 33.6364ZM76.8626 33.6364C76.8626 32.9744 76.7589 32.4162 76.5515 31.9617C76.3469 31.5043 76.0628 31.1591 75.6992 30.9261C75.3356 30.6903 74.9165 30.5724 74.4421 30.5724C73.9677 30.5724 73.5486 30.6903 73.185 30.9261C72.8214 31.1591 72.5359 31.5043 72.3285 31.9617C72.1239 32.4162 72.0216 32.9744 72.0216 33.6364C72.0216 34.2983 72.1239 34.858 72.3285 35.3153C72.5359 35.7699 72.8214 36.1151 73.185 36.3509C73.5486 36.5838 73.9677 36.7003 74.4421 36.7003C74.9165 36.7003 75.3356 36.5838 75.6992 36.3509C76.0628 36.1151 76.3469 35.7699 76.5515 35.3153C76.7589 34.858 76.8626 34.2983 76.8626 33.6364Z" fill={color}/>
              <path d="M87.4169 32.2173H85.8231C85.7777 31.956 85.6939 31.7244 85.5717 31.5227C85.4496 31.3182 85.2976 31.1449 85.1158 31.0028C84.9339 30.8608 84.7265 30.7543 84.4936 30.6832C84.2635 30.6094 84.0149 30.5724 83.7479 30.5724C83.2734 30.5724 82.853 30.6918 82.4865 30.9304C82.12 31.1662 81.8331 31.5128 81.6257 31.9702C81.4183 32.4247 81.3146 32.9801 81.3146 33.6364C81.3146 34.304 81.4183 34.8665 81.6257 35.3239C81.8359 35.7784 82.1229 36.1222 82.4865 36.3551C82.853 36.5852 83.272 36.7003 83.7436 36.7003C84.005 36.7003 84.2493 36.6662 84.4765 36.598C84.7067 36.527 84.9126 36.4233 85.0944 36.2869C85.2791 36.1506 85.4339 35.983 85.5589 35.7841C85.6868 35.5852 85.7748 35.358 85.8231 35.1023L87.4169 35.1108C87.3572 35.5256 87.228 35.9148 87.0291 36.2784C86.8331 36.642 86.576 36.9631 86.2578 37.2415C85.9396 37.517 85.5675 37.733 85.1413 37.8892C84.7152 38.0426 84.2422 38.1193 83.7223 38.1193C82.9552 38.1193 82.2706 37.9418 81.6683 37.5867C81.066 37.2315 80.5916 36.7188 80.245 36.0483C79.8984 35.3778 79.7251 34.5739 79.7251 33.6364C79.7251 32.696 79.8998 31.892 80.2493 31.2244C80.5987 30.554 81.0746 30.0412 81.6768 29.6861C82.2791 29.331 82.9609 29.1534 83.7223 29.1534C84.2081 29.1534 84.6598 29.2216 85.0774 29.358C85.495 29.4943 85.8672 29.6946 86.1939 29.9588C86.5206 30.2202 86.789 30.5412 86.9993 30.9219C87.2123 31.2997 87.3516 31.7315 87.4169 32.2173Z" fill={color}/>
              <path d="M90.4457 29.2727V38H88.8647V29.2727H90.4457Z" fill={color}/>
              <path d="M93.2784 38H91.5909L94.6633 29.2727H96.615L99.6917 38H98.0042L95.6733 31.0625H95.6051L93.2784 38ZM93.3338 34.5781H97.9361V35.848H93.3338V34.5781Z" fill={color}/>
              <path d="M100.841 38V29.2727H102.422V36.6747H106.266V38H100.841Z" fill={color}/>
              <path d="M110.615 29.2727H112.549L115.14 35.5966H115.243L117.833 29.2727H119.768V38H118.251V32.0043H118.17L115.758 37.9744H114.625L112.213 31.9915H112.132V38H110.615V29.2727Z" fill={color}/>
              <path d="M121.49 38V29.2727H127.166V30.598H123.071V32.9673H126.872V34.2926H123.071V36.6747H127.2V38H121.49Z" fill={color}/>
              <path d="M131.736 38H128.779V29.2727H131.796C132.662 29.2727 133.407 29.4474 134.029 29.7969C134.654 30.1435 135.134 30.642 135.469 31.2926C135.804 31.9432 135.972 32.7216 135.972 33.6278C135.972 34.5369 135.803 35.3182 135.465 35.9716C135.13 36.625 134.645 37.1264 134.012 37.4759C133.381 37.8253 132.623 38 131.736 38ZM130.36 36.6321H131.659C132.267 36.6321 132.774 36.5213 133.181 36.2997C133.587 36.0753 133.892 35.7415 134.097 35.2983C134.301 34.8523 134.404 34.2955 134.404 33.6278C134.404 32.9602 134.301 32.4063 134.097 31.9659C133.892 31.5227 133.59 31.1918 133.189 30.973C132.792 30.7514 132.297 30.6406 131.706 30.6406H130.36V36.6321Z" fill={color}/>
              <path d="M139.055 29.2727V38H137.474V29.2727H139.055Z" fill={color}/>
              <path d="M141.888 38H140.2L143.273 29.2727H145.224L148.301 38H146.614L144.283 31.0625H144.214L141.888 38ZM141.943 34.5781H146.545V35.848H141.943V34.5781Z" fill={color}/>
              <path d="M152.427 38V29.2727H154.008V33.2827H154.115L157.52 29.2727H159.45L156.075 33.1889L159.48 38H157.579L154.975 34.2585L154.008 35.4006V38H152.427Z" fill={color}/>
              <path d="M162.129 29.2727V38H160.548V29.2727H162.129Z" fill={color}/>
              <path d="M163.458 30.598V29.2727H170.421V30.598H167.723V38H166.155V30.598H163.458Z" fill={color}/>
              <path d="M24.4995 429C24.181 429 23.8771 428.898 23.6202 428.704C21.876 427.39 17.7076 424.123 16.6618 422.144C15.294 419.557 16.1154 416.235 18.4891 414.739C19.2563 414.256 20.1247 414 21.0076 414C22.3284 414 23.5695 414.549 24.4995 415.526C25.4294 414.549 26.6705 414 27.9913 414C28.8742 414 29.7426 414.256 30.5098 414.739C32.8835 416.235 33.7049 419.557 32.3407 422.144C31.295 424.123 27.1265 427.39 25.3824 428.704C25.1218 428.898 24.8179 429 24.4995 429ZM21.0076 415.098C20.3273 415.098 19.6579 415.295 19.0645 415.668C17.1648 416.868 16.5135 419.539 17.6171 421.624C18.5868 423.461 22.9507 426.834 24.2642 427.822C24.4018 427.924 24.5935 427.924 24.731 427.822C26.0445 426.83 30.4084 423.457 31.3782 421.624C32.4818 419.539 31.8305 416.865 29.9308 415.668C29.341 415.295 28.6716 415.098 27.9913 415.098C26.8008 415.098 25.6863 415.683 24.9337 416.7L24.4995 417.293L24.0652 416.7C23.3126 415.683 22.2017 415.098 21.0076 415.098Z" fill={color}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M93.9018 414.366C93.7739 414.137 93.5295 414 93.2663 414L77.7405 414.011C77.4284 414.011 77.1576 414.206 77.0486 414.499C76.9696 414.713 76.9884 414.941 77.0937 415.128C77.1351 415.197 77.1877 415.262 77.2517 415.319L83.2341 420.548L84.6931 428.403C84.7495 428.712 84.9826 428.941 85.2909 428.99C85.5955 429.04 85.8963 428.895 86.0543 428.624L93.898 415.109C94.0334 414.877 94.0334 414.595 93.9018 414.366ZM78.7971 415.143H91.4388L83.8282 419.546L78.7971 415.143ZM85.6105 427.13L84.3847 420.529L92.0066 416.123L85.6105 427.13Z" fill={color}/>
              <path fillRule="evenodd" clipRule="evenodd" d="M63.9938 428.636L63.1244 425.386C63.0745 425.204 63.0995 425.007 63.185 424.836C63.9439 423.311 64.1969 421.489 63.7301 419.589C63.0959 417.018 61.0935 414.954 58.5354 414.271C57.837 414.089 57.1494 414 56.4831 414C51.7016 414 47.9677 418.496 49.2575 423.5C49.8561 425.814 52.3216 428.211 54.6411 428.775C55.2681 428.929 55.8845 429 56.4831 429C57.7693 429 58.9736 428.668 60.0318 428.096C60.1494 428.032 60.2812 427.996 60.4095 427.996C60.4736 427.996 60.5377 428.004 60.6019 428.021L63.7586 428.868C63.7764 428.871 63.7942 428.875 63.8085 428.875C63.9296 428.875 64.0258 428.761 63.9938 428.636ZM62.1268 425.654L62.6185 427.493L60.8691 427.025C60.7194 426.986 60.5662 426.964 60.4095 426.964C60.1102 426.964 59.8073 427.043 59.5365 427.189C58.5852 427.704 57.5591 427.964 56.4831 427.964C55.9522 427.964 55.4142 427.896 54.8833 427.768C52.9202 427.289 50.7575 425.175 50.2587 423.239C49.7385 421.218 50.1482 419.143 51.381 417.546C52.6138 415.95 54.4736 415.036 56.4831 415.036C57.0746 415.036 57.6767 415.114 58.2717 415.275C60.47 415.861 62.1767 417.611 62.7289 419.839C63.1173 421.411 62.957 422.979 62.2622 424.375C62.0627 424.775 62.0128 425.229 62.1268 425.654Z" fill={color}/>
              <path d="M305.062 412H291.938C291.422 412 291 412.385 291 412.861V429.542C291 430.019 291.305 430.14 291.684 429.806L298.12 424.171C298.27 424.041 298.519 424.041 298.669 424.167L305.311 429.819C305.691 430.144 306 430.019 306 429.542V412.861C306 412.385 305.583 412 305.062 412ZM304.594 427.448L299.62 423.215C299.273 422.92 298.838 422.773 298.397 422.773C297.947 422.773 297.502 422.925 297.155 423.228L292.406 427.387V413.298H304.594V427.448Z" fill={color}/>
              <circle cx="144.319" cy="421.319" r="3.31916" fill={color}/>
              <circle cx="156.268" cy="421.319" r="3.31916" fill="#E1DEDD"/>
              <circle cx="168.217" cy="421.319" r="3.31916" fill="#E1DEDD"/>
              <circle cx="180.166" cy="421.319" r="3.31916" fill="#E1DEDD"/>
            </svg>
          </Flex>

          <Stack direction="column" w={{ sm:"100%", lg:"445px" }}>
            <Box>
              <Heading mt={12} fontSize={{ base: "25px", md: "30px", lg: "38px" }} className={styles.title} color={color}  as="h1" textAlign={{ lg:"start" , md:"center" }}>
              UN A??O DE PUBLICACIONES PARA TU MARCA
              </Heading>

              <Text fontSize={{ base: "18px" }} textAlign={{ lg:"start" , md:"center" }} mb={4} mt={4} fontWeight={500}>
              Kit de redes sociales con mas de 365 dise??os para tu marca. Disponibles en la plataforma de Canva, listos para usar.
              </Text>

              <UnorderedList  mb={6} color="#616161">
                <ListItem><Text fontSize={{ base: "18px", md: "18px", lg: "18px" }} >Imagen de Perfil <span> (+5)</span></Text></ListItem>
                <ListItem><Text fontSize={{ base: "18px", md: "18px", lg: "18px" }} >Formato Cuadrados <span> (+100)</span></Text></ListItem>
                <ListItem><Text fontSize={{ base: "18px", md: "18px", lg: "18px" }} >Formato Verticales <span> (+100)</span></Text></ListItem>
                <ListItem><Text fontSize={{ base: "18px", md: "18px", lg: "18px" }} >Stories <span> (+135)</span></Text></ListItem>
                <ListItem><Text fontSize={{ base: "18px", md: "18px", lg: "18px" }} >Covers facebook y LikedIn<span> (+10)</span></Text></ListItem>
              </UnorderedList>
            </Box>
              
              <Stack  w={{ sm:"100%", md:"445px" }}>
                <Text fontSize={{ base: '18px', md: '18px', lg: '18px' }} mb={4} textAlign={{ md:"start", sm:"center" }}>Selecciona tu color base favorito:</Text>

                <Flex className='colors' w={"100%"} justifyContent={"start"} mb={"2rem"}>
                  <div className='btn-red' onClick={colorRed} ></div>
                  {/* <div className='btn-green' onClick={colorGreen}></div>
                  <div className='btn-black' onClick={colorBlack}></div>
                  <div className='btn-pink' onClick={colorPink}></div>
                  <div className='btn-purple' onClick={colorPurple}></div>
                  <div className='btn-tiffblue' onClick={colorAqua}></div> */}
                </Flex>
              </Stack>
              
              <Stack direction={{md:"row", sm:"column"}} mb={4}>
                <ButtonCheckout color={colorMain}  copy="Comprar Kit" icon="https://icongr.am/feather/arrow-up-right.svg?size=25&color=ffffff" />
                <Link href="/kit30">

                <Button variant='outline' colorScheme={"secondary"} rightIcon={<Image src="https://icongr.am/feather/corner-down-right.svg?size=25&color=000000" alt='Kit 30 d??as'/>}>Kit de 30 d??as</Button>
                </Link>
              
              </Stack>
                <Text fontSize={{ base: '18px', md: '18px', lg: '18px' }} mb={4} textAlign={{ md:"start", sm:"center" }}>*Todos los colores los puedes cambiar a tu gusto.</Text>
          </Stack>

        </Stack >

      </Layout>

  )
}

export default Home
