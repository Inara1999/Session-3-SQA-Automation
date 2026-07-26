*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}        https://personal-profile-rho-six.vercel.app/
${BROWSER}    Chrome

*** Test Cases ***
Open Website And Navigate To About
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window

    ${title}=    Get Title
    Should Contain    ${title}    INARA

    Click Element    link:About

    Wait Until Element Is Visible    id:about    timeout=5s

    Capture Page Screenshot

    Sleep    3s

    Close Browser