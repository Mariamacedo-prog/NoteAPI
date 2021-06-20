DEVSNOTES: SISTEMA DE ANOTAÇÕES SISMPLES
O que o projeto precisa fazer?
-Listar anotações.
-Pegar informações de UMA anotação.
-Inserir uma anotação
-Atualizar uma anotação.
-Deletar uma anotação.

Qual a estrutura de dados?
-Local para armazenar as anotações.
—- id.
—- title.
—- body.

Quais os endpoints?
(METODO) /url (PARÂMETROS)
-(GET) /api/notes
-(GET) /api/note/123
-(POST) /api/notes (title, body)
-(PUT) /api/note/123 (title, body)
-(DELETE) /api/note/123
