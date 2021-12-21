export class Documentos {
  public id_documentos: number;
  public doc_maestro: string;
  public doc1: string;
  public doc2: string;
  public doc3: string;

  constructor(id_documentos: number, doc_maestro: string, doc1: string, doc2: string, doc3: string){
    this.id_documentos = id_documentos;
    this.doc_maestro = doc_maestro;
    this.doc1 = doc1;
    this.doc2 = doc2;
    this.doc3 = doc3;
  }
}
