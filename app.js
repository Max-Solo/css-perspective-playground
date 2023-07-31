Vue.createApp({
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			showAlert: false,
		}
	},
	computed: {
		box() {
			return {
				transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)`,
			}
		},
	},
	watch: {
		showAlert() {
			if(this.showAlert) {
				setTimeout(() => {
					this.showAlert = false
				}, 1500)
			}
		}
	},
	methods: {
		reset() {
			this.perspective = 100
			this.rotateX = 0
			this.rotateY = 0
			this.rotateZ = 0
		},
		async copy() {
			let text = `transform:${this.box.transform};`
			await navigator.clipboard.writeText(text)

			this.showAlert = true
		},
	},
}).mount('#app')
