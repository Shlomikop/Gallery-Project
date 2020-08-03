'use strict'


var gProjects = []
createProjects()




function getProjects() {
    return gProjects.slice();
}

function createProject(name, title, desc, url, date, labels) {
    return {
        id: makeId(),
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: date,
        labels: labels,
    }

}

function createProjects() {

    //pacman

    var name = 'pacman'
    var title = 'Pacman'
    var desc = 'The famous game of Pacman, with full features. It involves Javascript, CSS and HTML.'
    var url = ''
    var date = '15.07.2020'
    var labels = ['Javascript ', 'CSS ', 'HTML ']

    var pacman = createProject(name, title, desc, url, date, labels)
    gProjects.push(pacman)

    //mines sweeper
    var name = 'minesSweeper'
    var title = 'Mines Sweeper'
    var desc = 'The nostalgic Mines Sweeper game was developed after 2 weeks of participating in the coding course. It involves Javascript, CSS and HTML.'
    var url = ''
    var date = '23.07.2020'
    var labels = ['Javascript ', 'CSS ', 'HTML ']


    var minesSweeper = createProject(name, title, desc, url, date, labels)
    gProjects.push(minesSweeper)

    //bookshop
    var name = 'theBookShop'
    var title = 'The BookShop'
    var desc = 'This project is a demo of an online bookshop, intended for the bookshop owner to manage his library: add new books, add descriptions, update prices, remove book etc. It involves Javascript, CSS and HTML.'
    var url = ''
    var date = '01.08.2020'
    var labels = ['Javascript ', 'CSS ', 'HTML ', 'local storage']


    var bookshop = createProject(name, title, desc, url, date, labels)
    gProjects.push(bookshop)

}

function getProjectById(projectId) {
    var project = gProjects.find(function (project) {
        return projectId === project.id
    })
    return project
}