<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# About The Project

Lexicon Beneficial Ownership is a dedicated company to transparency and integrity in the corporate world. Our mission is to uncover and display the true beneficial ownership of companies, highlighting those involved in corruption. By providing clear, accessible information, we empower citizens, regulators, and investors to make informed decisions. Join us in our quest for accountability and help us shine a light on the hidden faces behind corporate corruption. Discover the truth with Lexicon Beneficial Ownership.

## Tech Stack

- NextJS
  - App Router
- Tailwind CSS

## Folder Structures

For the routing folder, we put all of our pages in `app` folder with the file name based on [App Router Documentation](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions). For another purpose besides UI pages, we used the following structure:

- `components`: Used to store all of the small components that are being used in a page
- `service`: Contains API configuration and API services, acted as a data layer that contains communication to the outside of the app
- `styles`: Contains global styles of CSS, also Tailwind declaration
- `types`: Contains data models that are used to map data obtained externally into the application
- `utils`: Contains utilities such as helper, constants, and enumeration

## Demonstration

You can access the website directly at [this link](https://bo.lexicon.id/)

## Roadmap

- [x] New API Implementation
- [x] Redesign the old demonstration
- [x] Landing page implementation
- [x] Visualization feature implementation
- [ ] Chatbot search (in progress)
- [ ] Create documentation (readme, license, etc)
- [ ] Implement CI/CD
      See the [open issues](https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/issues) for a full list of proposed features (and known issues).

# How to Run

1. Clone the project
2. Install the dependencies using `npm install`
3. Run the development server `npm run dev`

# Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# Feedback

If you have any feedback, please reach out to us at <a href="mailto:lexicon.indonesia.shared@gmail.com" target="_blank">Lexicon Indonesia</a>

<!-- LICENSE -->

# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Markdown Link and Images -->

[contributors-shield]: https://img.shields.io/github/contributors/LexiconIndonesia/lexicon-beneficiary-ownership.svg?style=for-the-badge
[contributors-url]: https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LexiconIndonesia/lexicon-beneficiary-ownership.svg?style=for-the-badge
[forks-url]: https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/network/members
[stars-shield]: https://img.shields.io/github/stars/LexiconIndonesia/lexicon-beneficiary-ownership.svg?style=for-the-badge
[stars-url]: https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/stargazers
[issues-shield]: https://img.shields.io/github/issues/LexiconIndonesia/lexicon-beneficiary-ownership.svg?style=for-the-badge
[issues-url]: https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/issues
[license-shield]: https://img.shields.io/github/license/LexiconIndonesia/lexicon-beneficiary-ownership.svg?style=for-the-badge
[license-url]: https://github.com/LexiconIndonesia/lexicon-beneficiary-ownership/blob/main/LICENSE.txt
