// function book(title, author, maxPage, onPage) {
// 			this.title = title;
// 			this.author = author;
// 			this.maxPage = maxPage;
// 			this.onPage = onPage;

// 			this.print = function(){
// 				// return `<b>Title:</b> ${this.title}, <b>Author:</b> ${this.author}, <b>Number of pages:</+b> ${this.maxPage}<br>`
// 				if(this.maxPage == this.onPage){
// 					return `<li>Ovaa kniga <b>${this.title}</b> od <i>${this.author}</i> e procitana.`
// 				} else {
// 					return `<li>Ovaa kniga <b>${this.title}</b> od <i>${this.author}</i> ne e procitana.`
// 				}
// 			};
// 			this.onlyPrint = function(){
// 				return `<tr>
// 							<td>${this.title}</td>
// 							<td>${this.author}</td>
// 							<td>${this.maxPage}</td>
// 							<td>${this.onPage}</td>
// 						`
// 			}

// 			this.percent = function(){
// 				var procent = Math.round(this.onPage / this.maxPage * 100)

// 				return procent;
// 			}
// 		}

// 			var book1 = new book("The Habiit", "J.R.R. Tolkien", 88, 88);
// 			var book2 = new book("The Lord Of the Rings", "J.R.R. Tolkien", 88, 38);
// 			var book3 = new book("test", "test", 58, 28);

// 			var books = [book1,book2,book3];

// 			for (var i = 0; i < books.length; i++) {
// 				document.getElementById('ulLista').innerHTML += books[i].print();
// 			}
// 			function printTable(){
// 				var tableBody = '';

// 				for (var c = 0; c < books.length; c++) {
// 					tableBody += books[c].onlyPrint();
// 				}

// 				document.getElementById('table').innerHTML = "<table>" + tableBody + "</table>";

// 				// var loop = document.getElementByClassName('myBar');

// 				// for (var j = 0; j < loop.length; j++) {
// 				// 	var progress = document.getElementByClassName('myBar')[j];

// 				// 	progress.style.width = books[j].percent() + '%'
// 				// }
// 			}

// 			printTable();

// 			document.getElementById('button').addEventListener('click', addBook);

// 			function addBook(){
// 				document.getElementById('ulLista').innerHTML = "";
// 				var title = prompt("Vnesi naslov");
// 				var author = prompt("Vnesi avtor");
// 				var allPages = parseInt(prompt("Vnesi vkupno stranici"));
// 				var page = parseInt(prompt("Vnesi procitani stranici"));

// 				var newBook = new book(title, author, allPages, page);
// 				books.push(newBook);
// 				for (var i = 0; i < books.length; i++) {
// 					document.getElementById('ulLista').innerHTML += books[i].print();
// 				}

// 				printTable();

// 			}