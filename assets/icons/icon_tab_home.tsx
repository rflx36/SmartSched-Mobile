import * as React from "react"
import Svg, { Defs, G, Path, RadialGradient, Stop } from "react-native-svg"
const IconHome = (props: any) => {



    return (props.is_active) ?
        (
            <Svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <G filter="url(#filter0_i_366_1367)">
                    <Path
                        d="M13.7762 2.30484C12.7193 1.52844 11.2807 1.52844 10.2238 2.30484L3.25113 7.4273C1.85213 8.45507 1.08633 10.1349 1.22808 11.8651L2.14699 23.0817C2.1895 23.6005 2.62302 24 3.14365 24H7.94445C8.49673 24 8.94444 23.5523 8.94444 23V19.1622C8.94444 18.0576 9.83988 17.1622 10.9444 17.1622H13.0556C14.1601 17.1622 15.0556 18.0576 15.0556 19.1622V23C15.0556 23.5523 15.5033 24 16.0556 24H20.8564C21.377 24 21.8105 23.6005 21.853 23.0817L22.7719 11.8651C22.9137 10.1349 22.1479 8.45507 20.7489 7.4273L13.7762 2.30484Z"
                        fill="url(#paint0_radial_366_1367)"
                    />
                </G>
                <Path
                    d="M14.0722 1.90189C12.8392 0.996092 11.1608 0.996093 9.92782 1.90189L2.9551 7.02435C1.41621 8.15489 0.57383 10.0027 0.729745 11.9059L1.64866 23.1225C1.71242 23.9008 2.36271 24.5 3.14365 24.5H7.94445C8.77287 24.5 9.44444 23.8284 9.44444 23V19.1622C9.44444 18.3337 10.116 17.6622 10.9444 17.6622H13.0556C13.884 17.6622 14.5556 18.3337 14.5556 19.1622V23C14.5556 23.8284 15.2271 24.5 16.0556 24.5H20.8564C21.6373 24.5 22.2876 23.9008 22.3513 23.1225L23.2703 11.9059C23.4262 10.0027 22.5838 8.15489 21.0449 7.02435L14.0722 1.90189Z"
                    stroke="#151515"
                />
                <Defs>
                    <RadialGradient
                        id="paint0_radial_366_1367"
                        cx={0}
                        cy={0}
                        r={1}
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(12 5.5) rotate(90) scale(18.5 29.3931)"
                    >
                        <Stop stopColor="#E9AA96" />
                        <Stop offset={0.299107} stopColor="#C185A2" />
                        <Stop offset={1} stopColor="#6962AD" />
                    </RadialGradient>
                </Defs>
            </Svg>
        ) :
        (
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                fill="none"
                {...props}
            >
                <Path
                    stroke="#363636"
                    strokeWidth={1.5}
                    d="M13.776 2.305a3 3 0 0 0-3.552 0L3.25 7.427a5 5 0 0 0-2.023 4.438l.919 11.217a1 1 0 0 0 .997.918h4.8a1 1 0 0 0 1-1v-3.838a2 2 0 0 1 2-2h2.112a2 2 0 0 1 2 2V23a1 1 0 0 0 1 1h4.8a1 1 0 0 0 .997-.918l.919-11.217a5 5 0 0 0-2.023-4.438l-6.973-5.122Z"
                />
            </Svg>
        )
}
export default IconHome;


