export interface Dev {
  fname:       string;
  lname:       string;
  image:       string;
  position:    string;
  socialMedia: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  url:  string;
}
