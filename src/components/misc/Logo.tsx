import cn from "@/utility/cn";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <div
      className={cn("site-logo w-[11.7rem] aspect-[117/55]", props.className)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 55" fill="none">
        <path
          d="M100.442 54.9976V0.0195312H105.947V54.9976H100.442Z"
          fill="url(#paint0_linear_3601_6828)"
        />
        <path
          d="M23.324 0H27.9635L51.161 54.9991H45.3827L38.1493 37.7908H13.0328L5.88372 54.9991H0L23.324 0ZM36.9473 33.5309L25.6016 6.34767L14.2137 33.5309H36.9473Z"
          fill="url(#paint1_linear_3601_6828)"
        />
        <path
          d="M90.2355 46.648C92.8919 44.2108 94.985 41.2236 96.369 37.8947C97.753 34.5658 98.3946 30.9752 98.2491 27.373C98.2566 22.5945 96.9744 17.9025 94.5375 13.792C92.1263 9.62773 88.6745 6.16141 84.5205 3.73269C80.4668 1.2868 75.8214 -0.00398814 71.087 9.25644e-06H70.5387V6.01026H70.8129C73.5302 5.99956 76.2259 6.49294 78.7633 7.46538C81.2578 8.37121 83.5432 9.77231 85.4822 11.5844C87.4211 13.3965 88.9734 15.5821 90.0457 18.0097C91.242 20.5582 91.8749 23.3347 91.9015 26.1499C92.0819 32.0793 89.9839 37.8525 86.0388 42.2827L77.983 34.037H69.906L81.6313 45.7201C78.4544 47.6747 74.8159 48.7517 71.087 48.8412C66.3066 48.8679 61.7023 47.0383 58.244 43.7378L54.5957 48.9256C56.5233 50.488 58.651 51.7859 60.9223 52.7848C64.3254 54.2749 68.0048 55.0295 71.7197 54.9991C76.8901 54.8662 81.8924 53.1349 86.0388 50.0433L90.5307 54.6617H98.2491L90.2355 46.648Z"
          fill="url(#paint2_linear_3601_6828)"
        />
        <path
          d="M46.2402 18.3042L52.2294 20.2865C52.7201 18.7602 53.3704 17.2899 54.1696 15.9001C54.7572 14.9089 55.4199 13.9642 56.1519 13.0742L51.7022 8.96191C49.2789 11.6822 47.4221 14.8581 46.2402 18.3042Z"
          fill="#EA4D9A"
        />
        <path
          d="M60.1445 2.38146L62.5697 8.09647L63.2656 7.78014C65.5353 6.67363 68.0169 6.06942 70.5412 6.0087V0.0195312C66.9432 0.024486 63.3915 0.831358 60.1445 2.38146Z"
          fill="#BD202E"
        />
        <path
          d="M60.1433 2.4039C57.1903 3.84863 54.5416 5.84589 52.3405 8.28762C52.1296 8.49851 51.9398 8.73049 51.75 8.96246L56.2419 13.1802C57.981 11.0877 60.1352 9.37869 62.5685 8.16109L60.1433 2.38281V2.4039Z"
          fill="#9858A2"
        />
        <path
          d="M54.5991 48.9244L58.2474 43.7366C57.8397 43.357 57.439 42.9563 57.0454 42.5345C55.404 40.8428 54.0442 38.8991 53.0174 36.7773L47.5977 40.0039C49.2479 43.4556 51.6384 46.5012 54.5991 48.9244Z"
          fill="#A6C639"
        />
        <path
          d="M46.6862 37.9592C46.9604 38.6552 47.2767 39.33 47.5931 40.0681L53.0128 36.8415C51.7818 34.2491 51.1202 31.4232 51.0727 28.5537L44.7461 29.2496C44.8932 32.242 45.5493 35.1874 46.6862 37.9592Z"
          fill="#F7EC33"
        />
        <path
          d="M44.7247 27.9834C44.7247 28.3841 44.7247 28.7848 44.7247 29.1854L51.0512 28.4895C51.0512 28.3208 51.0512 28.1521 51.0512 27.9834C51.0357 25.3713 51.4343 22.7733 52.2322 20.286L46.243 18.3037C45.2104 21.4254 44.6975 24.6955 44.7247 27.9834Z"
          fill="#EA7451"
        />
        <path
          d="M111.596 9.57489C114.228 9.57489 116.362 7.49772 116.362 4.93539C116.362 2.37307 114.228 0.295898 111.596 0.295898C108.964 0.295898 106.83 2.37307 106.83 4.93539C106.83 7.49772 108.964 9.57489 111.596 9.57489Z"
          fill="#209EC9"
        />
        <path
          d="M111.596 8.60446C113.692 8.60446 115.392 6.96161 115.392 4.93504C115.392 2.90848 113.692 1.26562 111.596 1.26562C109.499 1.26562 107.8 2.90848 107.8 4.93504C107.8 6.96161 109.499 8.60446 111.596 8.60446Z"
          fill="white"
        />
        <path
          d="M113.772 6.94008L112.865 5.35843C113.024 5.27733 113.172 5.17827 113.308 5.06319C113.465 4.9072 113.586 4.71879 113.663 4.51115C113.739 4.30352 113.769 4.08167 113.751 3.86114C113.709 3.46976 113.52 3.10885 113.223 2.85073C112.926 2.59262 112.542 2.45637 112.148 2.46929H110.124C110.103 2.46625 110.081 2.4678 110.061 2.47384C110.04 2.47988 110.022 2.49027 110.005 2.5043C109.989 2.51832 109.977 2.53565 109.968 2.55509C109.959 2.57452 109.955 2.59561 109.955 2.61691V7.02443C109.955 7.04572 109.959 7.06682 109.968 7.08625C109.977 7.10569 109.989 7.12302 110.005 7.13704C110.022 7.15106 110.04 7.16145 110.061 7.1675C110.081 7.17354 110.103 7.17509 110.124 7.17205H110.946C110.988 7.17237 111.028 7.15752 111.059 7.13031C111.09 7.1031 111.11 7.06543 111.115 7.02443V5.35843H111.684L112.549 7.02443C112.571 7.03739 112.597 7.04421 112.623 7.04421C112.649 7.04421 112.674 7.03739 112.697 7.02443H113.625C113.648 7.03429 113.673 7.03937 113.698 7.03937C113.724 7.03937 113.749 7.03429 113.772 7.02443C113.793 6.97019 113.793 6.90996 113.772 6.85572V6.94008ZM112.169 4.45162H111.115V3.24957H112.169C112.322 3.24947 112.469 3.30878 112.58 3.41499C112.69 3.52121 112.754 3.66604 112.76 3.81896C112.766 3.89998 112.755 3.98132 112.728 4.0579C112.701 4.13448 112.658 4.20466 112.603 4.26404C112.547 4.32341 112.48 4.37072 112.406 4.403C112.331 4.43527 112.251 4.45183 112.169 4.45162Z"
          fill="#209EC9"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3601_6828"
            x1="-27.7975"
            y1="53.5635"
            x2="162.337"
            y2="15.7516"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D86BA" />
            <stop offset="0.12" stopColor="#2C89BD" />
            <stop offset="0.18" stopColor="#2D8CBF" />
            <stop offset="0.25" stopColor="#2A99CE" />
            <stop offset="0.34" stopColor="#28A2D8" />
            <stop offset="0.47" stopColor="#27649D" />
            <stop offset="0.48" stopColor="#27316C" />
            <stop offset="0.49" stopColor="#27558E" />
            <stop offset="0.5" stopColor="#2682BA" />
            <stop offset="0.51" stopColor="#26A9E0" />
            <stop offset="0.52" stopColor="#262261" />
            <stop offset="0.56" stopColor="#2D5D90" />
            <stop offset="0.62" stopColor="#2B9ACF" />
            <stop offset="0.67" stopColor="#26A9E0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3601_6828"
            x1="-55.6529"
            y1="60.6087"
            x2="140.113"
            y2="-9.17354"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#272664" />
            <stop offset="0.09" stopColor="#272A67" />
            <stop offset="0.14" stopColor="#262261" />
            <stop offset="0.23" stopColor="#272C68" />
            <stop offset="0.24" stopColor="#27346E" />
            <stop offset="0.25" stopColor="#293870" />
            <stop offset="0.35" stopColor="#2E88BC" />
            <stop offset="0.46" stopColor="#26A9E0" />
            <stop offset="0.49" stopColor="#2D83B7" />
            <stop offset="0.55" stopColor="#2A4178" />
            <stop offset="0.74" stopColor="#2B4D81" />
            <stop offset="0.78" stopColor="#26A9E0" />
            <stop offset="0.81" stopColor="#26A9E0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3601_6828"
            x1="-50.3834"
            y1="75.3707"
            x2="143.505"
            y2="6.28443"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#262261" />
            <stop offset="0.11" stopColor="#262766" />
            <stop offset="0.23" stopColor="#263573" />
            <stop offset="0.37" stopColor="#264D8A" />
            <stop offset="0.51" stopColor="#266EA9" />
            <stop offset="0.66" stopColor="#2699D1" />
            <stop offset="0.71" stopColor="#26A9E0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
