tinymce.init({
    selector: "textarea",
    theme: "modern",
	language: 'de_AT',
    width: 850,
    height: 300,
	relative_urls: false,
    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor introduction"
   ],
   content_css: "css/tinymce.css",
   toolbar1: "insertfile undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect",
   toolbar2: "| link unlink anchor | image media | forecolor backcolor  | print preview code | pagebreak |",
   toolbar3: "| introduction1 | introduction2 |",
 }); 
