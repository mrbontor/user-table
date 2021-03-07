$(document).ready(function() {

	ajaxGetList();

	$('#btnBack').hide()

	function ajaxGetList(){
		$.ajax({
			type : "GET",
			url : window.location + "api/user/trx/list",
			success: function(result){
				let labels = Object.keys(result.data[0])

				htmlTable('#rowTable', result.data, labels, 'customerTable')

				$( "#customerTable tbody tr:odd" ).addClass("info");
				$( "#customerTable tbody tr:even" ).addClass("success");
			},
			error : function(e) {
				alert("ERROR: ", e);
				console.log("ERROR: ", e);
			}
		});
	}

	$('#btnPrivot').on('click', function (e) {
		e.preventDefault()
		ajaxGetPrivot()
		$('#btnBack').show()
		$('#btnPrivot').hide()
	})

	$('#btnBack').on('click', function (e) {
		e.preventDefault()
		ajaxGetList()
		$('#btnPrivot').show()
		$('#btnBack').hide()
	})

	function ajaxGetPrivot(){
		$.ajax({
			type : "GET",
			url : window.location + "api/user/trx/group",
			success: function(result){

				let labels = Object.keys(result.data[0])

				htmlTable('#rowTable', result.data, labels, 'customerTable')
				$( "#customerTable tbody tr:odd" ).addClass("info");
				$( "#customerTable tbody tr:even" ).addClass("success");
			},
			error : function(e) {
				alert("ERROR: ", e);
				console.log("ERROR: ", e);
			}
		});
	}

	function htmlTable(selector, data, columns, id_) {
		var sel = document.querySelector(selector);
		if(!sel) {
			throw new Error('Selected HTML element is not found');
		};

		if((!columns) || columns.length == 0) {
			columns = Object.keys(data[0]);
		}

		var tbe = document.createElement('table');
		tbe.setAttribute('id', id_)
		tbe.setAttribute('class', 'table table-bordered table-hover')
		var thead = document.createElement('thead');
		tbe.appendChild(thead);

		var tre = document.createElement('tr');
		for(var i=0;i<columns.length;i++){
			var the = document.createElement('th');
			the.textContent = columns[i];
			tre.appendChild(the);
		}
		thead.appendChild(tre);

		var tbody = document.createElement('tbody');
		tbe.appendChild(tbody);
		for(var j=0;j<data.length;j++){
			var tre = document.createElement('tr');
			for(var i=0;i<columns.length;i++){
				var the = document.createElement('td');
				the.textContent = data[j][columns[i]];
				tre.appendChild(the);
			}
			tbody.appendChild(tre);
		};
		emptyDOMChildren(sel);
		sel.appendChild(tbe);
	};

	// Utility function to fast delete all children of element if it is not empty
	// Can be replaced with simple but relatively "slower" container.innerHTML = "";
	function emptyDOMChildren (container){
		var len = container.childNodes.length;
		while (len--) {
			container.removeChild(container.lastChild);
		};
	};
})
