export interface DataEvent {
  name: string;
  subtitle: string;
  date: Date;
  description: string;
  image : string;
}

export interface DataAchivement{
  penyelenggara : string;
  date : Date;
  image : string;
  name : string;
}

export interface EventDate {
  date: {
    start: string;
  };
}
interface SubTitle {
  plain_text: string;
}

export interface Text {
  rich_text: SubTitle[];
}
export interface Title {
  title: SubTitle[];
}

export interface ImageDetail{
  name : string;
  type : string;
  file : {url : string}
}
export interface Image {
  files : ImageDetail[]
}

export interface Created{
  id : string;
  type : string;
  created_time : string;
}

export interface Page {
  id: string;
  object: string;
  properties: {
    [key: string]: EventDate | Title | Text | Image | Created;
  };
}

