/*
 * @Author: your name
 * @Date: 2021-02-04 18:50:50
 * @LastEditTime: 2021-02-05 15:22:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\pages\style\style.tsx
 */
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const Wrap = styled.div`
  max-width: 1120px;
  margin: auto;
  text-align: center;
  padding: 0 20px;

  .grid-item {
    width: 92%;
    margin: 26px;
  }
  img {
    width: 100%;
    height: auto;
    -webkit-clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0% 20%
    );
    clip-path: polygon(
      20% 0%,
      80% 0%,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0% 80%,
      0% 20%
    );
  }
`

const Style = (props: any) => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 400, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defin
    })
  }, [])
  return (
    <Wrap>
      <div className='wrap'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3}>
            <div
              data-aos='fade-in'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFjfbcO0eOgD8b1wPKWMRdMZ1mGS7%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='fade-in'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFsvKENkSGVVBMXtSSe_4yvCZBMOI%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-left'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFro_njtW8bHkPmNeVmUUr6waidiu%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFllYiAXWB0_ySVJhgMYXqU3opJFJ%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='flip-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFmVDLuqVadbWC7OwC0S_VfNOiJYB%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-left'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFoWEsOeRNbrZ2FQJT390-HpvbGsF%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>
            <div
              data-aos='flip-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFkLOoEHo36yJ8auNE3d7506IAET3%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='fade-in'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFg2Ih68CjSSN6BlHBisGOfjeZc5U%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFlCgR9r7SppUZW6MEXVSQ5O8Kk1M%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFnRaMZCAZfRtEL6X4QTjYMgHarud%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFh1V2uXaJ9keU3chq3eFRzoXIp2M%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFmjALJIii7Qan08aFWlKyyQmzSfz%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='zoom-in-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFq_Xxcfrivo40mas0mxo4Ctf8Kqs%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
                      </div>
                      <div
              data-aos='flip-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFmykzCdNSLd4IxXf72vqVqRzuZfl%2Fblob'
                alt='loading'
              />
                      </div>

                      <div
              data-aos='flip-right'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFgR_-aGd0rvT39H77TQVd5UJ_Q_R%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='flip-left'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFu3g70PNVUABWhAOkTT0XpbQ0YcO%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
              data-aos='fade-down'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFkJiwtLc0zW8isQXZ2Dtd74HvPlO%2Fblob'
                alt='loading'
              />
            </div>
            <div
              data-aos='fade-down'
              data-aos-duration='4000'
              className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFg4vzfoTgS7mAUUquvGTWYYsB2t8%2Fblob'
                alt='loading'
              />
                      </div>
                      
            <div
                data-aos='fade-down'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFiNjgx73R-5NWFY6cXgTsP1hSkeA%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>
            <div
                data-aos='fade-down'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFkWjz0QyYc4kXAlpD0DFWI7WALo4%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFpAUm0PL_9ccbnyVT1RfBYC0oDfJ%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
                      </div>
            <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFgleyemZRnoFMVinGDe4_Z9SeESx%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='slide-down'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFkpXzFrqGYwwoVi0JOEHKkdQ7Bew%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='slide-down'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFjZubyCT6XJ_8TRepVSN-AdAftqt%2Fblob'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFnVHwW_cCZTOjvLu5copokFhjPsm%2Fblob'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFnVHwW_cCZTOjvLu5copokFhjPsm%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFi6dym5ObQ9zOTd3LeeeEs4qepC9%2Fblob'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFhARixyzAYtWfcVadLT---ybnP2C%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFkWjz0QyYc4kXAlpD0DFWI7WALo4%2Fblob'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFpthjLak7dIX5n-NHBQ8VdiDLiYz%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
                      </div>
                      
                      <div
                data-aos='flip-left'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFu4zhtJQRtizpq_zTjgg5eP7jxqh%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFi-S2AQvEPx5jPonEdRRowI0Dek1%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFhm1cWo85T97zaxtG6jzY4FkXzxH%2Fblob'
                alt='loading'
              />
                      </div>
                      <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFjz1Ds04vB-IlJbylaa9SdEN3uuz%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFjcctAK1OdDCww8FQICxcQw0a5N4%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFmMCLzACWkwn5y50_mDf21K8iysZ%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFtjmxkZCn4aJivTfDBqjlCFmCrNb%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFpthjLak7dIX5n-NHBQ8VdiDLiYz%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFu4zhtJQRtizpq_zTjgg5eP7jxqh%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFu4zhtJQRtizpq_zTjgg5eP7jxqh%2Fblob'
                alt='loading'
              />
            </div>

            <div
                data-aos='flip-right'
                data-aos-duration='4000'
                className='grid-item'
            >
              <img
                src='https://bbs.store.hiwonder.com/uploads%2F20210205%2FFiQrFN4urQwsti-B7ARi2eyeQ85X%2Fblob?imageMogr2/auto-orient/strip/rotate/270'
                alt='loading'
              />
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Wrap>
  )
}

export default Style
