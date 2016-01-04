###
  tinycopy - A small library for clipboard copy
  @version 1.0.0
###
class TinyCopy

    ###
      @param {HTMLElement} trigger
      @param {HTMLElement} target
    ###
    constructor: (trigger, target) ->

        @temporary = null
        @listeners = {}
        
        if _validateParams trigger, target
            @trigger = trigger
            @target = target
            @acceptEvent()
        else
            console.log "Illegal arguments error."

    ###
      @param {String} event
      @param {Function} action
    ###
    on: (event, action) ->
        @listeners[event] = action

    ###
      @param {String} event
    ###
    emit: (event) ->
        @listeners[event] && @listeners[event].apply null, [].slice.call arguments, 1

    acceptEvent: ->
        self = @
        self.trigger.addEventListener 'click', ->
            self.addTemporary()
            self.execCopy()
            self.removeTemporary()

    addTemporary: ->
        @temporary = document.createElement 'input'
        @temporary.style.opacity = 0
        @temporary.setAttribute 'readonly', ''
        @temporary.value = @target.value
        document.body.appendChild @temporary

    execCopy: ->
        succeeded = false
        @temporary.select()
        try
            succeeded = document.execCommand 'copy'
        catch e
            succeeded = false
        if succeeded
            @emit 'success'
        else
            @emit 'error'

    removeTemporary: ->
        document.body.removeChild @temporary
        @temporary = null

    ###
      @param {Object...} argments
      @return {Boolean}
    ###
    _validateParams = ->
        arguments.length >= 2 && _isElement(arguments[0]) && _isElement(arguments[1])

    ###
      @param {HTMLElement} node
      @return {Boolean}
    ###
    _isElement = (node) ->
        !!(node && (node.nodeName || (node.prop && node.attr && node.find)))

module.exports = TinyCopy