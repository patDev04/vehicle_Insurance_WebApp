import React from 'react'
import policyPanelStyle from './page.module.css'
import Link from 'next/link'
import { GrFormNextLink } from "react-icons/gr";


const panel=[

    { title: 'short cover',desc: '1-30 Day cover with a simple quick and efficient form to fill you’ll be covered instantly'},
    { title: 'new learner driver', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse, expedita nisi labore doloribus soluta porro explicabo magni quia laudantium quo tenetur iste eos repudiandae numquam impedit odit quibusdam commodi!'},
    { title: 'car insurance', desc: 'Temporary impounded cover to release your vehicle what ever the circumstances.'},
    { title: 'multi car', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse, expedita nisi labore doloribus soluta porro explicabo magni quia laudantium quo tenetur iste eos repudiandae numquam impedit odit quibusdam commodi!'}
  ]

export const FeaturePolicy = () => {
  return (
    <div className={policyPanelStyle.container}>
        <h1 className={policyPanelStyle.subHeader}>Our Feature Policies</h1>
        <div className={policyPanelStyle.list}>
            {panel.map((item:any, idx: number)=>(
                <dl>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link href={'/'} className={policyPanelStyle.moreBtn}>
                        <p className={policyPanelStyle.moreBtnText}>learn more</p>
                        <GrFormNextLink />
                    </Link>
                </dl>
            ))}
        </div>
    </div>
  )
}
