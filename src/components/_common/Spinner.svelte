<script lang="ts">
	export let classes = ''
	export let suppressAnimation = false

	export let size = 150

	const randomNum = Math.random()
	const paint0 = `${randomNum}_angular_spinner_0`
	const paint1 = `${randomNum}_angular_spinner_1`
</script>

<div id="spinner" class="flex items-center justify-center {classes}">
	<svg
		width={size}
		height={size}
		viewBox="0 0 81 80"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M76 40.09C75.9997 43.9969 75.3412 47.8758 74.0519 51.5633C70.5446 61.5869 62.5833 69.5279 52.5394 73.0391C48.8199 74.3374 44.9089 75.0003 40.9698 75C21.6064 75.0185 5.90814 59.1613 6.0004 39.8767C6.09342 20.6207 21.7372 4.98624 41.0151 5.00001C60.3479 5.01303 76.0202 20.7328 76 40.09Z"
			fill="#0F137B"
		/>
		<path
			d="M53.2333 45.3059C52.1871 45.1647 51.2752 45.0245 50.3578 44.9214C49.0231 44.7712 47.6865 44.637 46.3479 44.5188C45.0792 44.4071 43.8078 44.317 42.5356 44.2406C42.1268 44.2156 41.9767 44.0779 41.9355 43.643C41.783 42.0018 41.4071 40.4109 40.7203 38.9793C40.8728 40.0309 41.0338 41.1445 41.1954 42.2574C41.2059 42.3268 41.2144 42.3976 41.2204 42.4677C41.3216 43.8338 41.2481 43.8768 39.9229 43.8949C37.9926 43.9199 36.062 43.995 34.1332 44.0671C33.7367 44.0819 33.5166 43.9527 33.3738 43.5786C32.4697 41.2046 32.3899 38.7693 32.9788 36.3357C33.5886 33.8154 36.0638 32.4902 38.7002 33.1492C41.6387 33.8838 43.8973 36.4483 44.1971 39.4585C44.3221 40.7169 43.9676 41.9087 43.4747 43.0589C43.4072 43.2163 43.337 43.3741 43.2677 43.5316C44.3511 42.9159 44.7107 41.8714 44.9125 40.7913C45.103 39.772 45.2348 38.7249 45.239 37.6899C45.2668 31.0013 45.246 24.3133 45.2615 17.6254C45.2607 16.9727 45.3383 16.3222 45.4928 15.6881C45.8409 14.303 46.7415 13.4941 48.0045 13.3669C49.4932 13.2166 50.7454 13.6275 51.538 14.9908C52.0411 15.8568 52.1944 16.8235 52.1954 17.7994C52.1987 25.7788 52.1904 33.7583 52.1704 41.7379C52.1671 43.01 52.1316 44.2677 53.2333 45.3059Z"
			fill="white"
		/>
		<path
			d="M34.178 53.6178C33.5069 54.463 32.5575 54.8328 31.5573 55.1265C30.5776 55.4139 29.732 55.1585 29.1044 54.4285C28.5373 53.7677 27.9985 53.0331 27.6479 52.2425C26.6025 49.8815 25.8039 47.4313 25.4158 44.8643C25.2228 43.5806 25.1475 42.2972 25.4791 41.0223C25.8724 39.5101 26.9065 38.6225 28.3995 38.6311C29.4084 38.6874 30.4901 39.0174 31.4958 39.5527C31.7226 39.6731 31.8638 40.0514 31.9409 40.3391C32.2632 41.5273 32.5325 42.7304 32.853 43.9194C32.9325 44.2131 32.8945 44.3913 32.685 44.6139C31.9849 45.3535 31.6066 46.2664 31.3815 47.2428C31.2272 47.9098 31.333 48.561 31.7461 49.1128C32.5194 50.1444 33.3112 51.162 34.1215 52.1656C34.5478 52.6911 34.6068 53.0775 34.178 53.6178Z"
			fill="white"
		/>
		<path
			d="M27.8912 54.7081C27.0321 56.1069 25.7969 56.2429 24.6529 55.0762C24.3819 54.8008 24.1221 54.5003 23.9228 54.1703C22.7199 52.1826 21.7065 50.1143 21.2751 47.8054C21.2171 47.4947 21.2121 47.175 21.1826 46.8587C21.1861 44.9284 22.2548 43.8415 24.1566 43.8258C24.5144 43.8232 24.6317 43.9324 24.6817 44.2962C25.0377 46.9083 25.5981 49.4726 26.6963 51.8857C27.0376 52.6368 27.5121 53.3286 27.8862 54.0664C27.9742 54.2414 27.9882 54.5496 27.8912 54.7081Z"
			fill="white"
		/>
		<path
			d="M53.7584 46.6016C53.2656 46.323 52.739 46.1349 52.1941 46.0638C49.3369 45.6923 46.4825 45.2932 43.6177 44.997C40.3855 44.6635 37.1417 44.7752 33.9039 44.9822C33.2308 45.0255 32.7 45.4559 32.5164 46.1064C32.4497 46.3437 32.4229 46.5931 32.3467 46.8277C31.8929 48.2213 32.4444 49.2796 33.4804 50.1526C34.254 50.8062 35.1626 51.2803 36.1408 51.5409C39.5163 52.453 42.9741 52.6841 46.4437 52.7898C46.5137 52.7925 46.5847 52.7943 46.655 52.795C48.3553 52.8409 50.057 52.8003 51.7578 52.8003C51.7606 52.8323 51.7623 52.8651 51.7648 52.8982C49.9618 53.0462 48.1567 53.1884 46.3544 53.3489L45.7498 53.4034C45.4468 53.4302 45.0925 53.4961 44.8657 53.6753C42.8114 55.3003 40.7778 56.9527 38.7425 58.6026C38.4924 58.8044 38.2731 59.0415 38.0393 59.2624C39.4896 56.8939 41.2264 54.822 43.7693 53.5351C40.6868 53.5386 37.6755 53.302 34.7986 51.9944C34.8201 52.1356 34.8236 52.2039 34.8408 52.2698C35.2011 53.6062 34.8408 54.5952 33.5876 55.1773C32.7847 55.5506 31.8736 55.6908 31.0162 55.9515C30.3278 56.162 29.738 56.0015 29.1909 55.5559C28.9944 55.3956 28.7518 55.2917 28.5043 55.146C27.5922 56.5336 26.41 56.7329 25.0017 55.9898C24.981 56.1958 24.9585 56.3153 24.9595 56.4374C24.969 57.7549 25.5163 58.9126 26.1027 60.0378C28.1552 63.9794 31.3873 66.2778 35.846 66.5897C38.1341 66.75 40.4467 66.6113 42.7471 66.5594C43.9173 66.5344 45.0882 66.4503 46.2174 66.1428C46.5084 66.0644 46.7949 65.9705 47.0758 65.8614C49.1907 65.0352 51.2207 64.0815 52.4092 61.9807C53.7497 59.6105 55.0886 57.2397 56.4258 54.8684C58.0021 52.0675 56.3523 48.0705 53.7584 46.6016ZM36.4108 47.2876C36.7054 46.7193 37.0327 46.0858 37.336 45.5035C37.7403 46.4466 37.3887 47.1144 36.4108 47.2876Z"
			fill="white"
		/>
		<path
			id="outer-circle"
			class:rotating={!suppressAnimation}
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M42 78.9622C42 78.42 42.4348 77.9772 42.9764 77.9495C63.0446 76.9213 79 60.3239 79 40C79 19.0132 61.9868 2 41 2C21.0058 2 4.61828 17.4419 3.11281 37.0501C3.07207 37.5807 2.63314 38 2.10098 38C1.52938 38 1.07163 37.5191 1.11462 36.9491C2.67325 16.2831 19.9351 0 41 0C63.0914 0 81 17.9086 81 40C81 61.4117 64.1765 78.894 43.0269 79.9495C42.4657 79.9775 42 79.5241 42 78.9622Z"
			fill="url(#{paint0})"
		/>
		<path
			id="inner-circle"
			class:rotating={!suppressAnimation}
			class:reverse={!suppressAnimation}
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M32.716 9.0491C32.6108 8.65624 32.2044 8.42287 31.814 8.53673C14.8528 13.4828 4.86701 31.1168 9.37578 48.2732C13.9555 65.7 31.9546 76.2129 49.4247 71.514C52.9789 70.5619 56.3475 69.0182 59.3896 66.9474L59.3898 66.9473L59.3899 66.9472C67.6029 61.3502 72.8674 52.2606 73.6086 42.3656L73.6086 42.3654C73.7102 41.0045 73.7257 39.6408 73.656 38.2824C73.6324 37.8209 73.1865 37.5062 72.7402 37.6258C72.3985 37.7173 72.1706 38.0382 72.1884 38.3915C72.2529 39.6768 72.2374 40.9669 72.1414 42.2545C71.4339 51.7 66.4063 60.3832 58.5614 65.7293C55.6557 67.7072 52.4381 69.1817 49.0432 70.0911L49.0424 70.0913C32.3615 74.5779 15.1711 64.5373 10.7987 47.8992C6.49562 31.5255 16.0179 14.6961 32.195 9.96019C32.5855 9.84586 32.8213 9.44213 32.716 9.0491Z"
			fill="url(#{paint1})"
		/>
		<defs>
			<radialGradient
				id={paint0}
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(0 30) scale(150 100)"
			>
				<stop offset="0.145833" stop-color="#0F137B" stop-opacity="0" />
				<stop offset="0.5" stop-color="#0F137B" stop-opacity="0.9" />
				<stop offset="0.885417" stop-color="#0F137B" />
			</radialGradient>
			<radialGradient
				id={paint1}
				cx="0"
				cy="0"
				r="1"
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(100 70) scale(100 100)"
			>
				<stop offset="0.145833" stop-color="#fff" />
				<stop offset="0.5" stop-color="#fff" stop-opacity="0.9" />
				<stop offset="0.885417" stop-color="#fff" stop-opacity="0" />
			</radialGradient>
		</defs>
	</svg>
</div>

<style>
  @-webkit-keyframes rotating-regular /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotating-regular {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotating-rev /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
    to {
      -webkit-transform: rotate(630deg);
      -o-transform: rotate(630deg);
      transform: rotate(630deg);
    }
  }
  @keyframes rotating-rev {
    from {
      -ms-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }

    to {
      -ms-transform: rotate(630deg);
      -moz-transform: rotate(630deg);
      -webkit-transform: rotate(630deg);
      -o-transform: rotate(630deg);
      transform: rotate(630deg);
    }
  }

  @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    to {
      -webkit-transform: rotate(1260deg);
      -o-transform: rotate(1260deg);
      transform: rotate(1260deg);
    }
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    to {
      -ms-transform: rotate(1260deg);
      -moz-transform: rotate(1260deg);
      -webkit-transform: rotate(1260deg);
      -o-transform: rotate(1260deg);
      transform: rotate(1260deg);
    }
  }

  .rotating {
    -webkit-animation: rotating-regular 1.5s linear infinite;
    -moz-animation: rotating-regular 1.5s linear infinite;
    -ms-animation: rotating-regular 1.5s linear infinite;
    -o-animation: rotating-regular 1.5s linear infinite;
    animation: rotating-regular 1.5s linear infinite;
    transform-origin: 50.62% 50%;
  }

  .reverse {
    animation-direction: reverse;
  }
</style>
