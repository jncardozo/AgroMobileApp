import React, {Component} from 'react';
import Video from 'react-native-video';
import {
    StyleSheet,
    ActivityIndicator,    
} from 'react-native';
import Layout        from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause     from '../components/play-pause'
import Restart       from '../components/restart'
import Speed         from '../components/speed'
import Timer         from '../components/timer'
import Repeat        from '../components/repeat'
import Volume        from '../components/volume'
import FullScreen    from '../components/full-screen'

class Player extends Component {
    state = {
        loading: true,
        paused: false,
        fullscreen: false,
        elapsed : '00:00',
        duration: '00:00',
        repeat  : false,
        playRate: 1,
        volume  : 1
    }

    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }

    onLoad = ( info ) => {
        this.setState ({
            loading: false,
            duration: ('0'+ ~~( info.duration / 60 )).substr(-2) + ':' + ('0'+ ~~( info.duration % 60 )).substr(-2)
        })
    }

    setRefVideo = ( el ) => {
        this.video = el
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

    onRestart = () => {
        this.video.seek(0)
    }

    onProgress = ( info ) => {
        this.setState({
            elapsed: ('0'+ ~~( info.currentTime / 60 )).substr(-2) + ':' + ('0'+ ~~( info.currentTime % 60 )).substr(-2)
        })
    }

    onEnd = ( info ) => {
        this.video.seek(0)
        var elapsed = this.state.duration
        if( this.state.repeat ){
            elapsed = '00:00' 
        } else {
            this.setState({ paused: true })
        }
        this.setState({
            elapsed
        })
    }

    onRepeat = () => {
        const repeat = !this.state.repeat
        this.setState({
            repeat
        })
    }

    onSpeed = ( dir ) => {
        var playRate = this.state.playRate
            playRate += dir == '-' ? -.5 : .5
        this.setState({
            playRate
        })
    }

    onVolume = () => {
        var volume = this.state.volume + 0.5
        var muted  = this.state.muted
        if( volume > 1 ){
            volume = 0
            muted = true
        } else {
            muted = false
        }
        this.setState({  
            volume,
            muted
        })
    }
    
    onFullscreen = () => {
        this.setState ({
            fullscreen : !this.state.fullscreen
        })
    }

    render() {
        return (
            <Layout
                loading = {this.state.loading}
                // fullscreen = { this.props.fullscreen }
                fullscreen = { this.state.fullscreen }
                playRate   = { this.state.playRate }
                video = {
                    <Video
                        ref = { this.setRefVideo }
                        // source = {{uri: 'https://pixabay.com/es/videos/agricultura-tractor-plantaci%C3%B3n-1098/'}}
                        source={require('../../../assets/videos/tractor.mp4')}
                        //   style={{
                        //     position: 'absolute',
                        //     left: 0,
                        //     right: 0,
                        //     bottom: 0, 
                        //     top: 0,                
                        //   }}
                        style      = { styles.video }
                        resizeMode = { this.props.fullscreen ? 'contain' : 'cover' }
                        onBuffer   = { this.onBuffer }
                        onLoad     = { this.onLoad }
                        onProgress = { this.onProgress }
                        onEnd      = { this.onEnd }
                        muted      = { this.state.muted }
                        paused     = { this.state.paused }
                        repeat     = { this.state.repeat }         
                        rate       = { this.state.playRate }
                        volume     = { this.state.volume }
                    />
                }
                loader = {
                    <ActivityIndicator color = "red" size='large'/>
                }
                controls = {
                    <ControlLayout>
                        <Restart 
                            onPress = { this.onRestart }
                        />
                        <Speed
                            onPressL = { this.onSpeed.bind(this, '-') }
                            onPressR = { this.onSpeed.bind(this, '+') }
                            speed   = { this.state.playRate }
                        />
                        <PlayPause 
                            onPress = {this.playPause}
                            paused = {this.state.paused}
                        />
                        <Timer
                            elapsed  = { this.state.elapsed }
                            duration = { this.state.duration }
                        />
                        <Repeat 
                            onPress = { this.onRepeat }
                            repeat  = { this.state.repeat }
                        />
                        <Volume
                            onPress = { this.onVolume }
                            volume  = { this.state.volume }
                            muted   = { this.state.muted }
                        />
                        <FullScreen 
                            onPress    = { this.onFullscreen }                            
                            fullscreen = { this.props.fullscreen }
                        />
                    </ControlLayout>
                }
            />               
        )        
    }
}

const styles = StyleSheet.create({
    player: {
        flex: 1
    },
    video: 
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
})

export default Player;