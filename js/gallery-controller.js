'use strict'
$(document).ready(onInit)


function onInit() {
    renderProjects()
}


function renderProjects() {
    var projects = getProjects()
    var strHTMLs = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${project.id}')">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div> 
                  <img class="proj-img img-fluid" src="img/portfolio/${project.name}.png" alt="" />
                </a>
                <div class="portfolio-caption">
                  <h4>${project.title}</h4>
                  <p class="text-muted">${project.publishedAt}</p> 
                </div>
                </div>`

    }).join('')
    console.log(strHTMLs);
    $('.proj-items-container').html(strHTMLs)
}

function renderModal(projectId) {

    var currProject = getProjectById(projectId)
    var strHTML = `<h2>'${currProject.title}'</h2>
                <p class="item-intro text-muted">This project was developed as part of Coding-Academy's course tasks</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${currProject.name}.png" alt="">
                <p>${currProject.desc}</p>
                <ul class="list-inline">
                  <li>Date: <span>${currProject.publishedAt}</span></li
                  <li>Labels: ${currProject.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>`

    $('.modal-body').html(strHTML)

}