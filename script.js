// default export
export default function greet() {
	var a = 10;
	console.log('Hi Good Morning');
}

//named export
export function greetWithName(name) {
	return `Hi Good Morning ${name}`;		
}